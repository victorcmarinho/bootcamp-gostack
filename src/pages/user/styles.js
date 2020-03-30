import Styled from 'styled-components';

export const Container = Styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = Styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = Styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = Styled.Text`
  margin-top: 10px;
  font-size: 20px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;

export const Bio = Styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Stars = Styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = Styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  background: #f5f5f5;
  padding: 10px 15px;
  border-radius: 4px;
  align-items: center;
`;

export const OwnerAvatar = Styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = Styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Title = Styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #999;
`;

export const Author = Styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;

export const StarsActivity = Styled.ActivityIndicator`
  color: #000;
  margin: 20px;
`;