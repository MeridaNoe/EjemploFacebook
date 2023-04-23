import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Input, Button, Image, Icon } from "@rneui/base";
import React, { useState } from "react";
import { isEmpty } from "lodash";
import Loading from "../../../../kernel/components/Loading";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login() {
  const payLoad = {
    email: "",
    password: "",
  };

  const auth = getAuth();
  const [error, setError] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(true);
  const [data, setData] = useState(payLoad);
  const [show, setShow] = useState(false);
  const changePayLoad = (e, type) => {
    setData({ ...data, [type]: e.nativeEvent.text });
  };
  const login = () => {
    if (!(isEmpty(data.email) || isEmpty(data.password))) {
      setShow(true);
      setError(payLoad);
      setShow(false);
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then(async (userCredential) => {
          setShow(false);
        })
        .catch((error) => {
          setError({ email: "", password: "Usuario o contraseña incorrectos" });
          setShow(false);
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      setShow(false);
      setError({
        email: "Campo obligatorio",
        password: "Campo obligatorio",
        repeatPassword: "Campo obligatorio",
      });
    }
  };
  return (
    <KeyboardAwareScrollView style={styles.screen}>
            <Image
                source={require('../../../../assets/logoface.png')}
                resizeMode='contain'
                style={styles.logo}
            />
            <View style={styles.viewForm}>
                <View style={styles.container}>
                    <Input
                        placeholder='Correo Electrónico'
                        keyboardType='email-address'
                        rightIcon={
                            <Icon type='material-community' name='email' size={22} />
                        }
                        containerStyle={styles.input}
                        onChange={(e) => changePayLoad(e, 'email')}
                        errorMessage={error.email}
                        autoCapitalize='none'
                    />
                    <Input
                        placeholder='Contraseña'
                        containerStyle={styles.input}
                        rightIcon={
                            <Icon
                                type='material-community'
                                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                onPress={() => setShowPassword(!showPassword)}
                                size={22}
                            />
                        }
                        secureTextEntry={showPassword}
                        onChange={(e) => changePayLoad(e, 'password')}
                        errorMessage={error.password}
                    />
                    <Button
                        title='Iniciar sesión'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                        onPress={login}
                    />
                </View>
            </View>
            <Text
                style={styles.createAccount}
                onPress={() => console.log("Vamos")}>
                Crear cuenta
            </Text>
            <Loading show={show} text='Iniciando sesión' />
        </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  logo: {
    width: "100%",
    height: 150,
    marginTop: 16,
    marginBottom: 16,
  },
  input: {
    width: "100%",
  },
  btnSuccess: {
    color: "#FFF",
    backgroundColor: "#28a745",
  },
  btnContainer: {
    margin: 16,
  },
  createAccount: {
    color: "#007bff",
  },
});
