import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TabBar = () => {
  return (
    <View style={styles.tabBar}>
      <View style={styles.wrapperSubtract}>
        <Image
          style={styles.subtractIcon}
          resizeMode="cover"
        //   source={require("../assets/subtract.png")}
        />
      </View>
      <View style={[styles.homeIconAndText, styles.homeIconPosition]}>
        <Image
          style={[styles.homeIconAndTextChild, styles.homeIconPosition]}
          resizeMode="cover"
        //   source={require("../assets/polygon-1.png")}
        />
        <Image
          style={styles.lomaboldhomeIcon}
          resizeMode="cover"
        //   source={require("../assets/lomaboldhome.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      </View>
      <View style={[styles.moreIconAndText, styles.iconPosition]}>
        <Text style={[styles.more, styles.homeTypo]}>More</Text>
        <Image
          style={styles.menuMoreVertical}
          resizeMode="cover"
        //   source={require("../assets/menu--more-vertical.png")}
        />
      </View>
      <View style={[styles.favouriteIconAndText, styles.iconPosition]}>
        <Text style={[styles.more, styles.homeTypo]}>Favourite</Text>
        <Image
          style={[styles.iconlytwoToneheart, styles.iconlytwoToneheartLayout]}
          resizeMode="cover"
        //   source={require("../assets/iconlytwotoneheart.png")}
        />
      </View>
      <Image
        style={[styles.categoriesIconAndText, styles.iconlytwoToneheartLayout]}
        resizeMode="cover"
        // source={require("../assets/categories-icon-and-text.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIconPosition: {
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    // color: Color.greyScaleBlack03,
    // fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    // fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 41,
    top: 31,
    position: "absolute",
  },
  iconlytwoToneheartLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  subtractIcon: {
    height: "100%",
    objectFit: "contain",
    left: -3,
    top: -5,
    transform: [
      {
        scale: 2.124,
      },
    ],
    position: "absolute",
    width: "100%",
  },
  wrapperSubtract: {
    borderRadius: 4,
    width: 375,
    height: 89,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  homeIconAndTextChild: {
    left: 75,
    width: 56,
    height: 56,
  },
  lomaboldhomeIcon: {
    left: 5,
    height: 24,
    width: 24,
    top: 31,
    position: "absolute",
  },
  home: {
    top: 55,
  },
  homeIconAndText: {
    left: 41,
    width: 131,
    height: 71,
  },
  more: {
    top: 25,
  },
  menuMoreVertical: {
    left: 2,
    overflow: "hidden",
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  moreIconAndText: {
    left: 304,
    width: 29,
  },
  iconlytwoToneheart: {
    height: "58.54%",
    width: "45.28%",
    top: "0%",
    right: "30.19%",
    bottom: "41.46%",
    left: "24.53%",
  },
  favouriteIconAndText: {
    left: 205,
    width: 53,
  },
  categoriesIconAndText: {
    height: "23.3%",
    width: "6.4%",
    top: "15.53%",
    right: "58.67%",
    bottom: "61.17%",
    left: "34.93%",
  },
  tabBar: {
    flex: 1,
    height: 103,
    width: "100%",
  },
});

export default TabBar;
