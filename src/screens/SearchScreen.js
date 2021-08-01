import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // console.log(term)
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

   
    return <View>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term) }/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results </Text>
        <ResultsList title="Cost Effective" results={filterResultsByPrice("$")}></ResultsList>
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")}></ResultsList>

        <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")}></ResultsList>

    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;