const graphql = require('graphql')
const _ = require('lodash')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = graphql

const Building = require('../models/building')
const City = require('../models/city')

const BuildingType = new GraphQLObjectType({
  name: 'Building',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    rentable: { type: GraphQLBoolean },
    rentPrice: { type: GraphQLInt },
    buildingType: { type: GraphQLString },
    location: { type: GraphQLString },
    rating: { type: GraphQLInt },
    city: {
      type: CityType,
      resolve(parent, args) {
        return City.findById(parent.authorId)
      }
    }
  })
})

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    buildings: {
      type: GraphQLList(BuildingType),
      resolve(parent, args) {
        return Building.find({ authorId: parent.id })
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    building: {
      type: BuildingType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Building.findById(args.id)
      }
    },
    city: {
      type: CityType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return City.findById(args.id)
      }
    },
    buildings: {
      type: new GraphQLList(BuildingType),
      resolve(parent, args) {
        Building.find({})
      }
    },
    cities: {
      type: new GraphQLList(CityType),
      resolve(parent, args) {
        City.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addBuilding: {
      type: BuildingType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        rentable: { type: new GraphQLNonNull(GraphQLBoolean) },
        rentPrice: { type: new GraphQLNonNull(GraphQLInt) },
        buildingType: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLString },
        rating: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        let building = new Building({
          name: args.name,
          rentable: args.rentable,
          rentPrice: args.rentPrice,
          buildingType: args.buildingType,
          location: args.location,
          rating: args.rating
        })

        return building.save()
      }
    },
    addCity: {
      type: CityType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLString }
      },
      resolve(parent, args) {
        let city = new City({
          name: args.name,
          location: args.location
        })

        return city.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})