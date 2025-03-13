import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import * as LocalAunthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function AuthScreen() {
  return (
    <LinearGradient colors={["#4caf50", "#2e7d32"]}>
      <View>
        <View>
            <Ionicons name="medical" size={80} color="white" />
        </View>
        <Text>
          MedCare
        </Text>
        <Text>
          Personal Health Assistant
        </Text>
        <View>
          <Text>
            Welcome Back!
          </Text>
          <Text>
            
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
