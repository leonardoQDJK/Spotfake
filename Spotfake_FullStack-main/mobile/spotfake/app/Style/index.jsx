import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#191414",
    width: "100%"
  },

  modal_scrollview: {
    backgroundColor: "white",
    padding: 20,
  },

  outer_container: {
    flex: 1,
    backgroundColor: "#",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    width: 400,
    justifyContent: "center",
    padding: 16,
    margin: 25,
    alignItems: "center",
    borderRadius: 10,
  },

  main_container: {
    flex: 1,
    backgroundColor: "#1db954",
    width: 250,
    justifyContent: "center",
    padding: 70,
    margin: 200,
    alignItems: "center",
    borderRadius: 99,
  },

  amazing_container: {
    backgroundColor: "1db954",
    justifyContent: "center",
    padding: 20,
    margin: 25,
    alignItems: "center",
    borderRadius: 10,
  },

  profile_container: {
    padding: 80,
    backgroundColor: "white",
    width: 400,
    borderRadius: 10,
  },

  modal_container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "start",
  },

  input: {
    display:"flex",
    height: 40,
    width: 300,
    borderColor: "#1db954",
    borderWidth: 2,
    marginBottom: 15,
    textAlign:"center",
    color: "#1db954",
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor:"#141f20",
    fontStyle:"italic",
    alignItems:"center",
  },

  pressable: {
    height: 60,
    width: 350,
    backgroundColor: "#141919",
    fontStyle: "italic",
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
  },

  pressable_text: {
    fontSize: 25,
    color: "#1db954",
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "Arial",
  },

  black_text: {
    fontSize: 25,
    color: "ffffff",
    textAlign: "center",
    fontFamily: "Arial",
  },

  logo: {
    width: 300,
    height: 250,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
  },

  link_pressable: {
    height: 30,
    width: 150,
    backgroundColor: "#141919",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 5,
  },

  link_text: {
    fontSize: 25,
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Arial",
    fontStyle:"italic",
  },

  home_container: {
    flex: 1,
    flexDirection: "column",
  },

  list: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  list_container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 40,
    marginTop: 5,
    marginBottom: 5,
  },

  navbar: {
    display: "flex",
    backgroundColor: "#191414",
    alignItems: "center",
    justifyContent: "center",
  },

  navbar_pressable: {
    flex: 1,
    height: 60,
    backgroundColor: "#191414",
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    flex: 0.15,
    paddingTop: 10,
    backgroundColor: '#191414',
    flexDirection: 'row',
    height: 100,
    justifyContent: "space-around"
  },

  profile: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 100,
    backgroundColor: "white"
  },

  artist_photo: {
    width: 140,
    height: 140,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    border: "solid",
    borderColor: "#bb2424",
    borderBottomColor: '#141919'
  },

  artist_button: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 140,
    height: 180,
    backgroundColor: '#141919',
    borderRadius: 20,
  },

  album_photo: {
    width: 300,
    height: 180,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    border: "solid",
    borderColor: "#bb2424",
    borderBottomColor: '#191414'
  },

  album_button: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 300,
    height: 230,
    backgroundColor: '#E31E1E',
    borderRadius: 20
  },

  music_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },

  big_photo: {
    width: 600,
    height: 350
  },

  lil_photo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white'
  },

  lil_button: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200
  },

  button_container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300
  }


});

export default styles;


