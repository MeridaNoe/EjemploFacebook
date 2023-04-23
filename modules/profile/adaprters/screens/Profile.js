import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/base";
import Loading from "../../../../kernel/components/Loading";
import { getAuth } from "firebase/auth";
import { Avatar } from "@rneui/themed";
export default function Profile() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const auth = getAuth();
  return (
    <View>
      <Avatar
        size="large"
        rounded
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/949/949648.png",
        }}
      />
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btn}
        onPress={() => {
          setText("Cerrando sesión");
          return auth.signOut();
        }}
      />

      <Loading show={show} text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
