const fs = require('fs');
const { stringify } = require('querystring');
const path = './storage/environment.json'

function getAllEnvironment() {
    const array = JSON.parse(fs.readFileSync(path))
    return array;
};

function getEnvironmentById(id) {
    const array = JSON.parse(fs.readFileSync(path))
    const filtered = array.filter((el) => el.id == id);
    if(filtered.length == 0) throw new Error('error')
    return filtered;
};

function createEnvironment(label, category, priority) {
    const item = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority,
    };
    const array = JSON.parse(fs.readFileSync(path))
    array.push(item);
    fs.writeFileSync(path, JSON.stringify(array))
    if(array.length == 0) throw new Error('error id')
    return array;
}

function updateEnvironment(id, label, category, priority) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter((el) => el.id != id)
    if (filtered.length == array.length) return 'id is not find'
    const item = {
        id: label,
        label: label,
        category: category,
        priority: priority,
    }
    filtered.push(item);
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
}

function deleteEnvironment(id){
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter((el) => el.id != id);
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered
}

module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment }