import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import axios from "axios";

const tempData = [
  {
    id: "1",
    title: "Nutella and cognac coffee cocktail",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/coctails_api/1.jpg",
  },
  {
    id: "2",
    title: "Easy rhubarb cordial",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/coctails_api/2.jpg",
  },
  {
    id: "3",
    title: "Bottled chocolate orange negroni",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/coctails_api/3.jpg",
  },
  {
    id: "4",
    title: "Pickled bramble martini",
    difficulty: "Easy",
    image: "https://apipics.s3.amazonaws.com/coctails_api/4.jpg",
  },
];

const Card = ({ title, difficulty, image }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.cardImage}
        resizeMode="contain"
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDifficulty}>{difficulty}</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={tempData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              difficulty={item.difficulty}
              image={item.image}
            />
          )}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No items found</Text>}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginTop: StatusBar.currentHeight,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    marginBottom: 15,
    shadowColor: "#333",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDifficulty: {
    fontSize: 14,
    color: "#777",
  },
});

// const [postList, setPostList] = useState([]);
// const [filteredPostList, setFilteredPostList] = useState([]);
// const [selectedDifficulty, setSelectedDifficulty] = useState("All")

// const options = {
//   method: "GET",
//   url: "https://the-cocktail-db3.p.rapidapi.com/",
//   headers: {
//     "x-rapidapi-key": "ada9d28efdmshe548c11ca979f9ap11c6c9jsneb31d468b424",
//     "x-rapidapi-host": "the-cocktail-db3.p.rapidapi.com",
//   },
// };

// const fetchData = async () => {
//   try {
//     const response = await axios.request(options);
//     setPostList(response.data.title || []); // Adjust based on actual response structure
//     setFilteredPostList(response.data.title || []);
//   } catch (error) {
//     console.error(error);
//   }
// };

// useEffect(() => {
//   fetchData();
// }, []);

// const filterByDifficulty = (difficulty) => {
//   setSelectedDifficulty(difficulty);
//   if (difficulty === "All") {
//     setFilteredPostList(postList);
//   } else {
//     const filtered = postList.filter(
//       (item) => item.difficulty === difficulty // Ensure your API provides a `difficulty` field
//     );
//     setFilteredPostList(filtered);
//   }
// };

export default App;
