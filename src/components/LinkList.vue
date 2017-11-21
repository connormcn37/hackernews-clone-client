<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <link-item
      v-for="link in allLinks"
      :key="link.id"
      :link="link">
    </link-item>
  </div>
</template>

<script>
  import { ALL_LINKS_QUERY } from '../constants/graphql'
  import LinkItem from './LinkItem'
  import gql from 'graphql-tag'

  export default {
    name: 'LinkList',
    data: ()=> {
      return {
        allLinks: [
          {
            id: '1',
            description: 'The Coolest GraphQL Backend 😎',
            url: 'https://www.graph.cool'
          }, {
            id: '2',
            description: 'The Best GraphQL Client',
            url: 'http://dev.apollodata.com/'
          }
        ],
        loading: 0
      }
    },
    components: {
      LinkItem
    },
    apollo: {
      allLinks: {
        query: ALL_LINKS_QUERY
      }
    }
  }
</script>
