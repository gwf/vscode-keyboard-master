'use strict';
import {window, QuickPickItem} from 'vscode';
import {defaultBindings} from "./resources/defaultBindings";
import {KeyBindQuickPickItem} from "./KeyBindQuickPickItem";

export function keyBindingChanger() {
    var quickItemList = defaultBindings().map(element => new KeyBindQuickPickItem(element.key, element.command, 'when' in element ? element['when'] : ' '));
    window.showQuickPick(quickItemList, {matchOnDescription:true})
    .then(function(selectedKeyBinding){
        window.showInputBox({placeHolder: 'change key binding for ' + selectedKeyBinding.description + ', currently: ' + selectedKeyBinding.label})
        .then(function(inputValue)){

        });
    });
}