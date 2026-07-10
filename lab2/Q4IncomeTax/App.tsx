import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

const App: React.FC = () => {
  const [income, setIncome] = useState<string>('');
  const [tax, setTax] = useState<string>('');

  const calculateTax = (): void => {
    const incomeAmount = parseFloat(income);
    if (isNaN(incomeAmount) || incomeAmount < 0) {
      setTax('Invalid income');
      return;
    }

    let taxAmount = 0;
    if (incomeAmount <= 10000000) {
      taxAmount = incomeAmount * 0.1;
    } else if (incomeAmount <= 50000000) {
      taxAmount = 10000000 * 0.1 + (incomeAmount - 10000000) * 0.2;
    } else {
      taxAmount = 10000000 * 0.1 + 40000000 * 0.2 + (incomeAmount - 50000000) * 0.3;
    }

    setTax(`Income Tax: ${taxAmount.toFixed(2)}₫`); 
  };

  const handleKeyPress = (val: string): void => {
    if (val === 'back') {
      setIncome(prev => prev.slice(0, -1));
    } else if (val === 'done') {
      calculateTax();
    } else {
      setIncome(prev => prev + val);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>Income Tax Calculator</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Enter your income"
          value={income}
          showSoftInputOnFocus={false} // Hides native OS keyboard layout
          caretHidden={false}
          editable={true}
        />
        
        <Button title="Calculate Tax" color="#2196F3" onPress={calculateTax} />
        
        <Text style={styles.result}>{tax}</Text>
      </View>

      {/* Replicated Custom Android-looking Keypad */}
      <View style={styles.keyboardContainer}>
        <View style={styles.keyboardRow}>
          {['1', '2', '3', '-'].map((k) => (
            <TouchableOpacity 
              key={k} 
              style={[styles.key, k === '-' ? styles.functionalKey : null]} 
              onPress={() => handleKeyPress(k)}
            >
              <Text style={styles.keyText}>{k}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keyboardRow}>
          {['4', '5', '6', '⎵'].map((k) => (
            <TouchableOpacity 
              key={k} 
              style={[styles.key, k === '⎵' ? styles.functionalKey : null]} 
              onPress={() => handleKeyPress(k === '⎵' ? ' ' : k)}
            >
              <Text style={styles.keyText}>{k}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keyboardRow}>
          {['7', '8', '9', '⌫'].map((k) => (
            <TouchableOpacity 
              key={k} 
              style={[styles.key, k === '⌫' ? styles.functionalKey : null]} 
              onPress={() => handleKeyPress(k === '⌫' ? 'back' : k)}
            >
              <Text style={styles.keyText}>{k}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keyboardRow}>
          {[',', '0', '.', '✓'].map((k) => {
            const isCheck = k === '✓';
            return (
              <TouchableOpacity 
                key={k} 
                style={[styles.key, isCheck ? styles.checkKey : null]} 
                onPress={() => handleKeyPress(isCheck ? 'done' : k)}
              >
                <Text style={[styles.keyText, isCheck ? styles.checkKeyText : null]}>{k}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default App;