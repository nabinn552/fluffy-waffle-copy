import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import * as Svg from "react-native-svg";
import { icons, images } from "../../constants";

const CarouselComponent = () => {
  const data = [
    { id: 1, title: "Item 1", image: images.scene_1 },
    { id: 2, title: "Item 2", image: images.scene_2 },
    { id: 3, title: "Item 3", image: images.scene_3 },
    { id: 4, title: "Item 3", image: images.cont_1 },
    { id: 5, title: "Item 3", image: images.cont_2 },
    { id: 6, title: "Item 3", image: images.cont_3 },
    { id: 7, title: "Item 3", image: images.cont_4 },
    // Add more items with different images as needed
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            borderRadius: 8,
            width: "100%",
            height: "100%",
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  const [activeSlide, setActiveSlide] = React.useState(0);
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={400}
        activeSlideAlignment="center"
        enableSnap
        loop
        loopClonesPerSide={data.length}
        onSnapToItem={(index) => setActiveSlide(index)} // Update active slide index
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{ marginTop: -17 }}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
        inactiveDotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.4}
      />
    </View>
  );
};
const HomeStackBtn = () => {
  return (
    <View style={styles.Icons} id="Iconss">
      <Svg.SvgXml xml={icons.camera} />

      <Text style={styles.iconsText}>Camera</Text>

      <Svg.SvgXml xml={icons.flag} />
      <Text style={styles.iconsText}>Flag</Text>

      <Svg.SvgXml xml={icons.gps} />

      <Text style={styles.iconsText}>Gps</Text>
      <Svg.SvgXml xml={icons.heart} />

      <Text style={styles.iconsText}>Heart</Text>
    </View>
  );
};

const PopularSites = () => {
  return (
    <View>
      <Text style={styles.PopularText}>Popular Sight</Text>

      <View style={styles.additionalContainer}>
        <Image
          source={images.scene_1}
          style={{
            borderRadius: 8,
            maxWidth: 100,
            height: 100,
          }}
        />
        <Image
          source={images.scene_2}
          style={{
            borderRadius: 8,
            maxWidth: 100,
            height: 100,
          }}
        />
        <Image
          source={images.cont_1}
          style={{
            borderRadius: 8,
            maxWidth: 100,
            height: 100,
          }}
        />
      </View>
    </View>
  );
};
const HomeContainers = () => {
  return (
    <View>
      <CarouselComponent />
      <HomeStackBtn />
      <PopularSites />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    position: "relative",

    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: 400,
    height: 200,
    backgroundColor: "white",
    borderRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  additionalContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 4,
    margin: 0,
    alignItems: "flex-start",
  },
  Icons: {
    height: 120,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10,
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 100,
      height: 200,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    alignItems: "center",
  },
  PopularText: {
    fontFamily: "monospace",
    margin: 10,
    padding: 10,
    fontWeight: "bold",
    color: "black",
  },
});

export default HomeContainers;
