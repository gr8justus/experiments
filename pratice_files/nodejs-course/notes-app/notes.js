'use strict';

import fs from 'fs';
import chalk from 'chalk';

// Handler processes
const loadNotes = () => {
    try {
        const data = fs.readFileSync('notes.json');
        const strData = data.toString();
        return JSON.parse(strData);
    } catch (e) {
        return [];
    }
}

const saveNotes = notes => {
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json', data);
}

// Handlers
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added!'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }
}

const removeNote = title => {
    const notes = loadNotes();
    const preservedNotes = notes.filter(note => note.title !== title);
    saveNotes(preservedNotes);

    if (notes.length > preservedNotes.length) {
        console.log(chalk.bgGreen('Note removed!'));
    } else {
        console.log(chalk.bgRed('No note found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bgRed('Your notes'))
    notes.forEach(note => console.log(chalk.yellow.bold(note.title)))
}

const readNote = title => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if (note) {
        console.log(chalk.inverse.bold(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
    
}

export { addNote, removeNote, listNotes, readNote };