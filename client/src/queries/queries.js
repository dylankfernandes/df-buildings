import { gql } from 'apollo-boost'

export const getBuildingsQuery = gql`
  {
    buildings {
      name
      id
    }
  }
`;

export const getCitiesQuery = gql`
  {
    cities {
      name
      id
    }
  }
`;

export const addBuildingMutation = gql`
  mutation($name: String!, $rentable: Boolean!, $rentPrice: Number, $buildingType: String!, $location: String, $rating: Number!, $cityId: ID!) {
    addBuilding(name: $name, rentable: $rentable, rentPrice: $rentPrice, buildingType: $buildingType, location: $location, rating: $rating, cityId: $cityId) {
      name
      rentable
      rentPrice
      buildingType
      location
      rating
    }
  }
`;

export const addCityMutation = gql`
  mutation($name: String!, $location: String) {
    addCity(name: $name, location: $location) {
      name
      location
    }
  }
`;

export const getBuildingQuery = gql`
  query($id: ID) {
    building(id: $id) {
      id
      name
    }
  }
`;

export const getCityQuery = gql`
  query($id: ID) {
    city(id: $id) {
      id
      name
    }
  }
`;
