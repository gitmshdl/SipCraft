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
  const [postList, setPostList] = useState([]);

  const options = {
    method: "GET",
    url: "https://the-cocktail-db3.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": "6463a727f5mshe4e09e4714d1c96p1f82b5jsne811d13059e6",
      "x-rapidapi-host": "the-cocktail-db3.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setPostList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={postList}
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
        ListHeaderComponent={<Text style={styles.headerText}>Sip?</Text>}
      />
    </SafeAreaView>
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
    borderRadius: 4,
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
    height: 200,
  },
  cardContent: {
    padding: 15,
    alignItems: "center",
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
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
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
