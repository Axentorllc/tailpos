import * as React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Input, Item, Header } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class SearchComponent extends React.PureComponent {
  onSearchClick = () => this.props.onSearchClick(false)
  itemMaintenanceStatusChange = () => this.props.itemMaintenanceStatusChange(false)

  searchSales() {
    const { onChangeText } = this.props;
    return (
      <Item>
        <Icon name="magnify" size={20} />
        <Input
          placeholder="Search Items"
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={this.onSearchClick}>
          <Icon name="close" size={20} />
        </TouchableOpacity>
      </Item>
    );
  }

  searchItem() {
    const { onChangeText } = this.props;
    return (
      <Item>
        <Icon name="magnify" size={20} />
        <Input
          placeholder="Search Items"
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={this.itemMaintenanceStatusChange}>
          <Icon name="close" size={20} />
        </TouchableOpacity>
      </Item>
    );
  }

  render() {
    if (this.props.status === "Item") {
      return (
        <Header
          searchBar
          rounded
          style={styles.header}
        >
          {this.searchItem()}
        </Header>
      );
    } else if (this.props.status === "Sales") {
      return (
        <Header
          searchBar
          rounded
          style={styles.header}
        >
          {this.searchSales()}
        </Header>
      );
    }
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#294398",
  },
});
