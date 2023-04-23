import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Input, Icon } from "@rneui/base";
import { Avatar } from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Home(props) {
  const [images, setimages] = useState([
    require("../../../../assets/foto4.jpg"),
    require("../../../../assets/foto5.jpg"),
    require("../../../../assets/foto6.jpg"),
  ]);
  return (
    <View>
      <Input
        style={styles.input}
        placeholder="Que estas pensando"
        keyboardType="default"
        rightIcon={<Icon type="material-community" name="image" size={22} />}
      />
      <KeyboardAwareScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FlatList
            data={images}
            key={"3"}
            numColumns={3}
            renderItem={({ item }) => (
              <Image
                source={item}
                style={{
                  width: 180,
                  height: 220,
                  borderWidth: 2,
                  borderColor: "#fff",
                  resizeMode: "contain",
                  margin: 6,
                }}
                keyExtractor={(item) => item.id}
              />
            )}
          />
        </ScrollView>
        <Text>Maximiliano Carsi</Text>
        <View>
       
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    marginTop: 16,
    width: 200,
    height: 200,
    alignItems: "center",
    marginLeft: 90,
  },
  input: {
    height: 40,
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 20, // establece el radio del borde
    borderWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: 200,
    height: 200,
  },
});
