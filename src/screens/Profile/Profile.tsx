import { Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./Profile.styles";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/v2/D5603AQFd9mS9F_4VtA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720091790422?e=1744848000&v=beta&t=An1eNXK58HySX_I6M7O-20rKfDzaZ-ujO9s7MfpSjQc",
        }}
        style={styles.profilePicture}
      />

      <Text style={styles.name}>Jastine Formentera</Text>

      <Text style={styles.detail}>jastineformentera@gmail.com</Text>

      <Text style={styles.detail}>+1 (123) 456-7890</Text>

      <Text style={styles.detail}>123 Malabon City, Philippines</Text>
    </View>
  );
};

export default Profile;
