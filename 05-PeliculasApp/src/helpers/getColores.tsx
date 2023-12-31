import { getColors } from "react-native-image-colors";

 
 
 export const getImageColors = async( uri: string ) => {
    
    const colors = await getColors(uri, {});

    let primary;
    let secondary;

    if (colors.platform === "android") {
        // Access android properties
        // e.g.
        primary = colors.dominant;
        secondary = colors.average;
    }else{
        // Access iOS properties
        // e.g.
        primary = colors.primary;
        secondary = colors.secondary;
    }
    return [primary, secondary];
  }