'use strict';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addNote, removeNote, listNotes, readNote } from './notes.js';
const yarg = yargs(hideBin(process.argv));

// Create add command
yarg.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => addNote(argv.title, argv.body)
})

// Create remove command
yarg.command({
    command: 'remove',
    describe: 'Removes the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => removeNote(argv.title)
})

// Create list command
yarg.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: listNotes
})

// Create read command
yarg.command({
    command: 'read',
    describe: 'Makes previewing note possible',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => readNote(argv.title)
})

yarg.parse();