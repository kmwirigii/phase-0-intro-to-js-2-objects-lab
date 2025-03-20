function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Returns a new object with updated key-value pair
}