import React, { Component } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

class MobileApp extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      title: '',
      author: '',
      genre: '',
      pages: '',
      totalPages: 0,
    };
  }

  addBook = () => {
    const { title, author, genre, pages, totalPages } = this.state;
    const book = { title, author, genre, pages: parseInt(pages) };
    const updatedBooks = [book, ...this.state.books];

    this.setState({
      books: updatedBooks,
      title: '',
      author: '',
      genre: '',
      pages: '',
      totalPages: totalPages + parseInt(pages),
    });
  };

  renderBooks() {
    return this.state.books.map((book, index) => (
      <View key={index}>
        <Text>Title: {book.title}</Text>
        <Text>Author: {book.author}</Text>
        <Text>Genre: {book.genre}</Text>
        <Text>Pages: {book.pages}</Text>
      </View>
    ));
  }

  render() {
    return (
      <ScrollView>
        <Text>Add a New Book</Text>
        <TextInput
          placeholder="Title"
          value={this.state.title}
          onChangeText={(text) => this.setState({ title: text })}
        />
        <TextInput
          placeholder="Author"
          value={this.state.author}
          onChangeText={(text) => this.setState({ author: text })}
        />
        <TextInput
          placeholder="Genre"
          value={this.state.genre}
          onChangeText={(text) => this.setState({ genre: text })}
        />
        <TextInput
          placeholder="Pages"
          value={this.state.pages}
          onChangeText={(text) => this.setState({ pages: text })}
        />
        <Button title="Add Book" onPress={this.addBook} />

        <Text>Last Book Read:</Text>
        {this.state.books.length > 0 && (
          <View>
            <Text>Title: {this.state.books[0].title}</Text>
            <Text>Author: {this.state.books[0].author}</Text>
            <Text>Genre: {this.state.books[0].genre}</Text>
            <Text>Pages: {this.state.books[0].pages}</Text>
          </View>
        )}

        <Text>Total Pages Read: {this.state.totalPages}</Text>
        <Text>Average Pages: {this.state.books.length > 0 ? this.state.totalPages / this.state.books.length : 0}</Text>

        <Text>History of Last Three Books:</Text>
        {this.renderBooks()}
      </ScrollView>
    );
  }
}

export default MobileApp;
