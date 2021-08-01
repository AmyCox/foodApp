import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // console.log(term)
    const [searchApi, results, errorMessage] = useResults();
    console.log("SEARCH API", searchApi, "RESULTS", results)

   


    return <View>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term) }/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results </Text>
    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;