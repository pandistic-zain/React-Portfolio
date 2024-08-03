# Use an official Maven image to build the app
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory
WORKDIR /app

# Copy the pom.xml and source code
COPY pom.xml .
COPY src /app/src

# Package the application
RUN mvn clean package -DskipTests

# Use a minimal base image for the runtime environment
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/portfolio-backend-0.0.1-SNAPSHOT.jar /app/portfolio-backend.jar

# Run the application
ENTRYPOINT ["java", "-jar", "portfolio-backend.jar"]
