import React, { Component } from 'react';

import { TouchableOpacity, Linking } from 'react-native';

import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  StarsActivity,
} from './styles';

import api from '../../services/api';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: navigation.getParam('user').name,
    });
  
    static propTypes = {
      navigation: PropTypes.shape({
        getParam: PropTypes.func,
      }).isRequired,
    };
  
    state = {
      stars: [],
      repository: {},
      loading: false,
      page: 1,
      refreshing: false,
    };
  
    async componentDidMount() {
      this.setState({ loading: true });
  
      const { navigation } = this.props;
      const user = navigation.getParam('user');
      const response = await api.get(`/users/${user.login}/starred`);
  
      this.setState({
        stars: response.data,
        loading: false,
      });
    }
  
    async loadMore() {
      const { page } = this.state;
      const { navigation } = this.props;
  
      const user = navigation.getParam('user');
  
      const response = await api.get(`/users/${user.login}/starred`, {
        params: {
          page: page + 1,
        },
      });
  
      this.setState({
        stars: [...this.state.stars, ...response.data],
        page: page + 1,
      });
    }
  
    async refreshList() {
      const { navigation } = this.props;
  
      const user = navigation.getParam('user');
  
      const response = await api.get(`/users/${user.login}/starred`, {
        params: {
          page: 1,
        },
      });
  
      this.setState({
        stars: response.data,
        page: 1,
      });
    }
  
    handleNavigateStarDetails(star) {
      const { navigation } = this.props;
      const { full_name, html_url } = star;
  
      const repository = {
        full_name,
        html_url,
      };
      Linking.openURL(html_url).catch((err) => console.error('An error occurred', err));
      
    }
  
    render() {
      const { navigation } = this.props;
      const { stars, loading } = this.state;
  
      const user = navigation.getParam('user');
  
      return (
        <Container>
          <Header>
            <Avatar source={{ uri: user.avatar }}></Avatar>
            <Name>{user.name}</Name>
            <Bio>{user.bio}</Bio>
          </Header>
  
          {!loading ? (
            <Stars
              data={stars}
              keyExtractor={star => String(star.id)}
              onEndReachedThreshold={0.2}
              onEndReached={() => {
                this.loadMore();
              }}
              onRefresh={() => {
                this.refreshList();
              }}
              refreshing={this.state.refreshing}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    this.handleNavigateStarDetails(item);
                  }}
                >
                  <Starred>
                    <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                    <Info>
                      <Title>{item.name}</Title>
                      <Author>{item.owner.login}</Author>
                    </Info>
                  </Starred>
                </TouchableOpacity>
              )}
            />
          ) : (
            <StarsActivity />
          )}
        </Container>
      );
    }
  }