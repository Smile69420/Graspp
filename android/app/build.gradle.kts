plugins {
  id("com.android.application")

  // Add the Google services Gradle plugin
  id("com.google.gms.google-services")
}

android {
  // Existing configuration
}

dependencies {
  // Import the Firebase BoM (Bill of Materials)
  implementation(platform("com.google.firebase:firebase-bom:33.2.0"))

  // Add the dependencies for Firebase products you want to use
  // The versions are handled by the BoM
  implementation("com.google.firebase:firebase-analytics")

  // Add other Firebase products as needed
  // For example:
  // implementation("com.google.firebase:firebase-auth")
  // implementation("com.google.firebase:firebase-database")
}
