export function defaultBindingsMac(){ return [
{ "key": "escape escape",         "command": "workbench.action.exitZenMode",
                                     "when": "inZenMode" },
{ "key": "shift+escape",          "command": "closeReferenceSearchEditor",
                                     "when": "inReferenceSearchEditor && !config.editor.stablePeek" },
{ "key": "escape",                "command": "closeReferenceSearchEditor",
                                     "when": "inReferenceSearchEditor && !config.editor.stablePeek" },
{ "key": "shift+escape",          "command": "cancelSelection",
                                     "when": "editorHasSelection && editorTextFocus" },
{ "key": "escape",                "command": "cancelSelection",
                                     "when": "editorHasSelection && editorTextFocus" },
{ "key": "cmd+down",              "command": "cursorBottom",
                                     "when": "editorTextFocus" },
{ "key": "shift+cmd+down",        "command": "cursorBottomSelect",
                                     "when": "editorTextFocus" },
{ "key": "shift+alt+cmd+down",    "command": "cursorColumnSelectDown",
                                     "when": "editorTextFocus" },
{ "key": "shift+alt+cmd+left",    "command": "cursorColumnSelectLeft",
                                     "when": "editorTextFocus" },
{ "key": "shift+alt+cmd+pagedown", "command": "cursorColumnSelectPageDown",
                                     "when": "editorTextFocus" },
{ "key": "shift+alt+cmd+pageup",  "command": "cursorColumnSelectPageUp",
                                     "when": "editorTextFocus" },
{ "key": "shift+alt+cmd+right",   "command": "cursorColumnSelectRight",
                                     "when": "editorTextFocus" },
{ "key": "shift+alt+cmd+up",      "command": "cursorColumnSelectUp",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+n",                "command": "cursorDown",
                                     "when": "editorTextFocus" },
{ "key": "down",                  "command": "cursorDown",
                                     "when": "editorTextFocus" },
{ "key": "shift+down",            "command": "cursorDownSelect",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+e",                "command": "cursorEnd",
                                     "when": "editorTextFocus" },
{ "key": "cmd+right",             "command": "cursorEnd",
                                     "when": "editorTextFocus" },
{ "key": "end",                   "command": "cursorEnd",
                                     "when": "editorTextFocus" },
{ "key": "shift+cmd+right",       "command": "cursorEndSelect",
                                     "when": "editorTextFocus" },
{ "key": "shift+end",             "command": "cursorEndSelect",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+a",                "command": "cursorHome",
                                     "when": "editorTextFocus" },
{ "key": "cmd+left",              "command": "cursorHome",
                                     "when": "editorTextFocus" },
{ "key": "home",                  "command": "cursorHome",
                                     "when": "editorTextFocus" },
{ "key": "shift+cmd+left",        "command": "cursorHomeSelect",
                                     "when": "editorTextFocus" },
{ "key": "shift+home",            "command": "cursorHomeSelect",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+b",                "command": "cursorLeft",
                                     "when": "editorTextFocus" },
{ "key": "left",                  "command": "cursorLeft",
                                     "when": "editorTextFocus" },
{ "key": "shift+left",            "command": "cursorLeftSelect",
                                     "when": "editorTextFocus" },
{ "key": "pagedown",              "command": "cursorPageDown",
                                     "when": "editorTextFocus" },
{ "key": "shift+pagedown",        "command": "cursorPageDownSelect",
                                     "when": "editorTextFocus" },
{ "key": "pageup",                "command": "cursorPageUp",
                                     "when": "editorTextFocus" },
{ "key": "shift+pageup",          "command": "cursorPageUpSelect",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+f",                "command": "cursorRight",
                                     "when": "editorTextFocus" },
{ "key": "right",                 "command": "cursorRight",
                                     "when": "editorTextFocus" },
{ "key": "shift+right",           "command": "cursorRightSelect",
                                     "when": "editorTextFocus" },
{ "key": "cmd+up",                "command": "cursorTop",
                                     "when": "editorTextFocus" },
{ "key": "shift+cmd+up",          "command": "cursorTopSelect",
                                     "when": "editorTextFocus" },
{ "key": "cmd+u",                 "command": "cursorUndo",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+p",                "command": "cursorUp",
                                     "when": "editorTextFocus" },
{ "key": "up",                    "command": "cursorUp",
                                     "when": "editorTextFocus" },
{ "key": "shift+up",              "command": "cursorUpSelect",
                                     "when": "editorTextFocus" },
{ "key": "alt+right",             "command": "cursorWordEndRight",
                                     "when": "editorTextFocus" },
{ "key": "shift+alt+right",       "command": "cursorWordEndRightSelect",
                                     "when": "editorTextFocus" },
{ "key": "alt+left",              "command": "cursorWordStartLeft",
                                     "when": "editorTextFocus" },
{ "key": "shift+alt+left",        "command": "cursorWordStartLeftSelect",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+backspace",        "command": "deleteLeft",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "ctrl+h",                "command": "deleteLeft",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+backspace",       "command": "deleteLeft",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "backspace",             "command": "deleteLeft",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "ctrl+delete",           "command": "deleteRight",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "ctrl+d",                "command": "deleteRight",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "delete",                "command": "deleteRight",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "alt+backspace",         "command": "deleteWordLeft",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "alt+delete",            "command": "deleteWordRight",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+a",                 "command": "editor.action.selectAll" },
{ "key": "cmd+i",                 "command": "expandLineSelection",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+o",                "command": "lineBreakInsert",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+tab",             "command": "outdent",
                                     "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus" },
{ "key": "shift+cmd+z",           "command": "redo",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "ctrl+pagedown",         "command": "scrollLineDown",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+pageup",           "command": "scrollLineUp",
                                     "when": "editorTextFocus" },
{ "key": "cmd+pagedown",          "command": "scrollPageDown",
                                     "when": "editorTextFocus" },
{ "key": "cmd+pageup",            "command": "scrollPageUp",
                                     "when": "editorTextFocus" },
{ "key": "tab",                   "command": "tab",
                                     "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus" },
{ "key": "cmd+z",                 "command": "undo",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+escape",          "command": "removeSecondaryCursors",
                                     "when": "editorHasMultipleSelections && editorTextFocus" },
{ "key": "escape",                "command": "removeSecondaryCursors",
                                     "when": "editorHasMultipleSelections && editorTextFocus" },
{ "key": "right",                 "command": "repl.action.acceptSuggestion",
                                     "when": "editorTextFocus && inDebugRepl && suggestWidgetVisible" },
{ "key": "down",                  "command": "repl.action.historyNext",
                                     "when": "editorTextFocus && inDebugRepl && onLastDebugReplLine" },
{ "key": "up",                    "command": "repl.action.historyPrevious",
                                     "when": "editorTextFocus && inDebugRepl && onFirsteDebugReplLine" },
{ "key": "cmd+e",                 "command": "actions.find" },
{ "key": "cmd+f",                 "command": "actions.find" },
{ "key": "cmd+f",                 "command": "defaultSettings.action.focusSearch",
                                     "when": "defaultSettingsEditor" },
{ "key": "cmd+backspace",         "command": "deleteAllLeft",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+delete",            "command": "deleteAllRight",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "ctrl+k",                "command": "deleteAllRight",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+k cmd+c",           "command": "editor.action.addCommentLine",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+d",                 "command": "editor.action.addSelectionToNextFindMatch",
                                     "when": "editorFocus" },
{ "key": "shift+alt+a",           "command": "editor.action.blockComment",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+f2",                "command": "editor.action.changeAll",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+c",                 "command": "editor.action.clipboardCopyAction",
                                     "when": "editorTextFocus" },
{ "key": "cmd+x",                 "command": "editor.action.clipboardCutAction",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+v",                 "command": "editor.action.clipboardPasteAction",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+/",                 "command": "editor.action.commentLine",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+alt+down",        "command": "editor.action.copyLinesDownAction",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+alt+up",          "command": "editor.action.copyLinesUpAction",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+k cmd+k",           "command": "editor.action.defineKeybinding",
                                     "when": "editorTextFocus && !editorReadonly && editorLangId == 'json'" },
{ "key": "shift+cmd+k",           "command": "editor.action.deleteLines",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+alt+f",           "command": "editor.action.formatDocument",
                                     "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly" },
{ "key": "cmd+k cmd+f",           "command": "editor.action.formatSelection",
                                     "when": "editorHasDocumentSelectionFormattingProvider && editorHasSelection && editorTextFocus && !editorReadonly" },
{ "key": "f12",                   "command": "editor.action.goToDeclaration",
                                     "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor" },
{ "key": "cmd+f12",               "command": "editor.action.goToImplementation",
                                     "when": "editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor" },
{ "key": "shift+cmd+.",           "command": "editor.action.inPlaceReplace.down",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+cmd+,",           "command": "editor.action.inPlaceReplace.up",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+]",                 "command": "editor.action.indentLines",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "alt+cmd+up",            "command": "editor.action.insertCursorAbove",
                                     "when": "editorTextFocus" },
{ "key": "shift+alt+i",           "command": "editor.action.insertCursorAtEndOfEachLineSelected",
                                     "when": "editorTextFocus" },
{ "key": "alt+cmd+down",          "command": "editor.action.insertCursorBelow",
                                     "when": "editorTextFocus" },
{ "key": "cmd+enter",             "command": "editor.action.insertLineAfter",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+cmd+enter",       "command": "editor.action.insertLineBefore",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "ctrl+j",                "command": "editor.action.joinLines",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+cmd+\\",          "command": "editor.action.jumpToBracket",
                                     "when": "editorTextFocus" },
{ "key": "f8",                    "command": "editor.action.marker.next",
                                     "when": "editorFocus && !editorReadonly" },
{ "key": "shift+f8",              "command": "editor.action.marker.prev",
                                     "when": "editorFocus && !editorReadonly" },
{ "key": "alt+down",              "command": "editor.action.moveLinesDownAction",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "alt+up",                "command": "editor.action.moveLinesUpAction",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+k cmd+d",           "command": "editor.action.moveSelectionToNextFindMatch",
                                     "when": "editorFocus" },
{ "key": "f3",                    "command": "editor.action.nextMatchFindAction",
                                     "when": "editorFocus" },
{ "key": "cmd+g",                 "command": "editor.action.nextMatchFindAction",
                                     "when": "editorFocus" },
{ "key": "cmd+f3",                "command": "editor.action.nextSelectionMatchFindAction",
                                     "when": "editorFocus" },
{ "key": "cmd+k f12",             "command": "editor.action.openDeclarationToTheSide",
                                     "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor" },
{ "key": "cmd+[",                 "command": "editor.action.outdentLines",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+cmd+f12",         "command": "editor.action.peekImplementation",
                                     "when": "editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor" },
{ "key": "alt+f12",               "command": "editor.action.previewDeclaration",
                                     "when": "editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor" },
{ "key": "shift+f3",              "command": "editor.action.previousMatchFindAction",
                                     "when": "editorFocus" },
{ "key": "shift+cmd+g",           "command": "editor.action.previousMatchFindAction",
                                     "when": "editorFocus" },
{ "key": "shift+cmd+f3",          "command": "editor.action.previousSelectionMatchFindAction",
                                     "when": "editorFocus" },
{ "key": "cmd+.",                 "command": "editor.action.quickFix",
                                     "when": "editorHasCodeActionsProvider && editorTextFocus && !editorReadonly" },
{ "key": "shift+f12",             "command": "editor.action.referenceSearch.trigger",
                                     "when": "editorHasReferenceProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor" },
{ "key": "cmd+c",                 "command": "problems.action.copy",
                                     "when": "problemFocus" },
{ "key": "cmd+k cmd+u",           "command": "editor.action.removeCommentLine",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "f2",                    "command": "editor.action.rename",
                                     "when": "editorHasRenameProvider && editorTextFocus && !editorReadonly" },
{ "key": "shift+cmd+l",           "command": "editor.action.selectHighlights",
                                     "when": "editorFocus" },
{ "key": "alt+f1",                "command": "editor.action.showAccessibilityHelp",
                                     "when": "editorFocus" },
{ "key": "shift+f10",             "command": "editor.action.showContextMenu",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+i",           "command": "editor.action.showHover",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+shift+cmd+right",  "command": "editor.action.smartSelect.grow",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+shift+cmd+left",   "command": "editor.action.smartSelect.shrink",
                                     "when": "editorTextFocus" },
{ "key": "alt+cmd+f",             "command": "editor.action.startFindReplaceAction" },
{ "key": "ctrl+shift+m",          "command": "editor.action.toggleTabFocusMode" },
{ "key": "alt+z",                 "command": "editor.action.toggleWordWrap" },
{ "key": "ctrl+t",                "command": "editor.action.transposeLetters",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "shift+cmd+space",       "command": "editor.action.triggerParameterHints",
                                     "when": "editorHasSignatureHelpProvider && editorTextFocus" },
{ "key": "ctrl+space",            "command": "editor.action.triggerSuggest",
                                     "when": "editorHasCompletionItemProvider && editorTextFocus && !editorReadonly" },
{ "key": "cmd+k cmd+x",           "command": "editor.action.trimTrailingWhitespace",
                                     "when": "editorTextFocus && !editorReadonly" },
{ "key": "cmd+k cmd+i",           "command": "editor.debug.action.showDebugHover",
                                     "when": "editorTextFocus && inDebugMode" },
{ "key": "f9",                    "command": "editor.debug.action.toggleBreakpoint",
                                     "when": "editorTextFocus" },
{ "key": "shift+f9",              "command": "editor.debug.action.toggleColumnBreakpoint",
                                     "when": "editorTextFocus" },
{ "key": "tab",                   "command": "editor.emmet.action.expandAbbreviation",
                                     "when": "config.emmet.triggerExpansionOnTab && editorTextFocus && !editorHasMultipleSelections && !editorHasSelection && !editorReadonly && !editorTabMovesFocus" },
{ "key": "alt+cmd+[",             "command": "editor.fold",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+0",           "command": "editor.foldAll",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+1",           "command": "editor.foldLevel1",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+2",           "command": "editor.foldLevel2",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+3",           "command": "editor.foldLevel3",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+4",           "command": "editor.foldLevel4",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+5",           "command": "editor.foldLevel5",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+6",           "command": "editor.foldLevel6",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+7",           "command": "editor.foldLevel7",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+8",           "command": "editor.foldLevel8",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+9",           "command": "editor.foldLevel9",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+[",           "command": "editor.foldRecursively",
                                     "when": "editorTextFocus" },
{ "key": "alt+cmd+]",             "command": "editor.unfold",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+j",           "command": "editor.unfoldAll",
                                     "when": "editorTextFocus" },
{ "key": "cmd+k cmd+]",           "command": "editor.unfoldRecursively",
                                     "when": "editorTextFocus" },
{ "key": "tab",                   "command": "insertSnippet",
                                     "when": "config.editor.tabCompletion && editorTextFocus && hasSnippetCompletions && !editorTabMovesFocus && !inSnippetMode" },
{ "key": "enter",                 "command": "repl.action.acceptInput",
                                     "when": "editorTextFocus && inDebugRepl" },
{ "key": "shift+escape",          "command": "closeFindWidget",
                                     "when": "editorFocus && findWidgetVisible" },
{ "key": "escape",                "command": "closeFindWidget",
                                     "when": "editorFocus && findWidgetVisible" },
{ "key": "alt+cmd+enter",         "command": "editor.action.replaceAll",
                                     "when": "editorFocus && findWidgetVisible" },
{ "key": "shift+cmd+1",           "command": "editor.action.replaceOne",
                                     "when": "editorFocus && findWidgetVisible" },
{ "key": "alt+enter",             "command": "editor.action.selectAllMatches",
                                     "when": "editorFocus && findWidgetVisible" },
{ "key": "alt+down",              "command": "find.history.showNext",
                                     "when": "editorFocus && findInputFocussed && findWidgetVisible" },
{ "key": "alt+up",                "command": "find.history.showPrevious",
                                     "when": "editorFocus && findInputFocussed && findWidgetVisible" },
{ "key": "alt+cmd+c",             "command": "toggleFindCaseSensitive",
                                     "when": "editorFocus" },
{ "key": "alt+cmd+r",             "command": "toggleFindRegex",
                                     "when": "editorFocus" },
{ "key": "alt+cmd+w",             "command": "toggleFindWholeWord",
                                     "when": "editorFocus" },
{ "key": "shift+escape",          "command": "closeBreakpointWidget",
                                     "when": "breakpointWidgetVisible && editorFocus" },
{ "key": "escape",                "command": "closeBreakpointWidget",
                                     "when": "breakpointWidgetVisible && editorFocus" },
{ "key": "enter",                 "command": "acceptSnippet",
                                     "when": "editorTextFocus && inSnippetMode" },
{ "key": "tab",                   "command": "jumpToNextSnippetPlaceholder",
                                     "when": "editorTextFocus && inSnippetMode" },
{ "key": "shift+tab",             "command": "jumpToPrevSnippetPlaceholder",
                                     "when": "editorTextFocus && inSnippetMode" },
{ "key": "escape",                "command": "leaveEditorMessage",
                                     "when": "messageVisible" },
{ "key": "shift+escape",          "command": "leaveSnippet",
                                     "when": "editorTextFocus && inSnippetMode" },
{ "key": "escape",                "command": "leaveSnippet",
                                     "when": "editorTextFocus && inSnippetMode" },
{ "key": "shift+escape",          "command": "closeMarkersNavigation",
                                     "when": "editorFocus && markersNavigationVisible" },
{ "key": "escape",                "command": "closeMarkersNavigation",
                                     "when": "editorFocus && markersNavigationVisible" },
{ "key": "shift+escape",          "command": "closeReferenceSearch",
                                     "when": "referenceSearchVisible && !config.editor.stablePeek" },
{ "key": "escape",                "command": "closeReferenceSearch",
                                     "when": "referenceSearchVisible && !config.editor.stablePeek" },
{ "key": "shift+escape",          "command": "closeParameterHints",
                                     "when": "editorTextFocus && parameterHintsVisible" },
{ "key": "escape",                "command": "closeParameterHints",
                                     "when": "editorTextFocus && parameterHintsVisible" },
{ "key": "ctrl+n",                "command": "showNextParameterHint",
                                     "when": "editorTextFocus && parameterHintsMultipleSignatures && parameterHintsVisible" },
{ "key": "alt+down",              "command": "showNextParameterHint",
                                     "when": "editorTextFocus && parameterHintsMultipleSignatures && parameterHintsVisible" },
{ "key": "down",                  "command": "showNextParameterHint",
                                     "when": "editorTextFocus && parameterHintsMultipleSignatures && parameterHintsVisible" },
{ "key": "ctrl+p",                "command": "showPrevParameterHint",
                                     "when": "editorTextFocus && parameterHintsMultipleSignatures && parameterHintsVisible" },
{ "key": "alt+up",                "command": "showPrevParameterHint",
                                     "when": "editorTextFocus && parameterHintsMultipleSignatures && parameterHintsVisible" },
{ "key": "up",                    "command": "showPrevParameterHint",
                                     "when": "editorTextFocus && parameterHintsMultipleSignatures && parameterHintsVisible" },
{ "key": "tab",                   "command": "acceptSelectedSuggestion",
                                     "when": "editorTextFocus && suggestWidgetVisible" },
{ "key": "enter",                 "command": "acceptSelectedSuggestionOnEnter",
                                     "when": "acceptSuggestionOnEnter && editorTextFocus && suggestWidgetVisible" },
{ "key": "shift+escape",          "command": "hideSuggestWidget",
                                     "when": "editorTextFocus && suggestWidgetVisible" },
{ "key": "escape",                "command": "hideSuggestWidget",
                                     "when": "editorTextFocus && suggestWidgetVisible" },
{ "key": "alt+pagedown",          "command": "selectNextPageSuggestion",
                                     "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible" },
{ "key": "pagedown",              "command": "selectNextPageSuggestion",
                                     "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible" },
{ "key": "ctrl+n",                "command": "selectNextSuggestion",
                                     "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible" },
{ "key": "alt+down",              "command": "selectNextSuggestion",
                                     "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible" },
{ "key": "down",                  "command": "selectNextSuggestion",
                                     "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible" },
{ "key": "alt+pageup",            "command": "selectPrevPageSuggestion",
                                     "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible" },
{ "key": "pageup",                "command": "selectPrevPageSuggestion",
                                     "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible" },
{ "key": "ctrl+p",                "command": "selectPrevSuggestion",
                                     "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible" },
{ "key": "alt+up",                "command": "selectPrevSuggestion",
                                     "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible" },
{ "key": "up",                    "command": "selectPrevSuggestion",
                                     "when": "editorTextFocus && suggestWidgetMultipleSuggestions && suggestWidgetVisible" },
{ "key": "ctrl+space",            "command": "toggleSuggestionDetails",
                                     "when": "editorTextFocus && suggestWidgetVisible" },
{ "key": "enter",                 "command": "acceptRenameInput",
                                     "when": "editorFocus && renameInputVisible" },
{ "key": "shift+escape",          "command": "cancelRenameInput",
                                     "when": "editorFocus && renameInputVisible" },
{ "key": "escape",                "command": "cancelRenameInput",
                                     "when": "editorFocus && renameInputVisible" },
{ "key": "shift+escape",          "command": "closeAccessibilityHelp",
                                     "when": "accessibilityHelpWidgetVisible && editorFocus" },
{ "key": "escape",                "command": "closeAccessibilityHelp",
                                     "when": "accessibilityHelpWidgetVisible && editorFocus" },
{ "key": "escape",                "command": "closeReplaceInFilesWidget",
                                     "when": "replaceInputBoxFocus && searchViewletVisible" },
{ "key": "cmd+backspace",         "command": "debug.removeBreakpoint",
                                     "when": "breakpointsFocused" },
{ "key": "cmd+backspace",         "command": "debug.removeWatchExpression",
                                     "when": "watchExpressionsFocused" },
{ "key": "escape",                "command": "list.clear",
                                     "when": "listFocus" },
{ "key": "cmd+up",                "command": "list.collapse",
                                     "when": "listFocus" },
{ "key": "left",                  "command": "list.collapse",
                                     "when": "listFocus" },
{ "key": "right",                 "command": "list.expand",
                                     "when": "listFocus" },
{ "key": "ctrl+n",                "command": "list.focusDown",
                                     "when": "listFocus" },
{ "key": "down",                  "command": "list.focusDown",
                                     "when": "listFocus" },
{ "key": "home",                  "command": "list.focusFirst",
                                     "when": "listFocus" },
{ "key": "end",                   "command": "list.focusLast",
                                     "when": "listFocus" },
{ "key": "pagedown",              "command": "list.focusPageDown",
                                     "when": "listFocus" },
{ "key": "pageup",                "command": "list.focusPageUp",
                                     "when": "listFocus" },
{ "key": "ctrl+p",                "command": "list.focusUp",
                                     "when": "listFocus" },
{ "key": "up",                    "command": "list.focusUp",
                                     "when": "listFocus" },
{ "key": "cmd+enter",             "command": "list.select",
                                     "when": "listFocus" },
{ "key": "enter",                 "command": "list.select",
                                     "when": "listFocus" },
{ "key": "space",                 "command": "list.toggleExpand",
                                     "when": "listFocus" },
{ "key": "shift+cmd+f",           "command": "search.action.focusActiveEditor",
                                     "when": "searchInputBoxFocus && searchViewletVisible" },
{ "key": "f4",                    "command": "search.action.focusNextSearchResult" },
{ "key": "shift+f4",              "command": "search.action.focusPreviousSearchResult" },
{ "key": "alt+cmd+enter",         "command": "search.action.replaceAll",
                                     "when": "replaceActive && searchViewletVisible && !findWidgetVisible" },
{ "key": "down",                  "command": "search.focus.nextInputBox",
                                     "when": "inputBoxFocus && searchViewletVisible" },
{ "key": "up",                    "command": "search.focus.previousInputBox",
                                     "when": "inputBoxFocus && searchViewletVisible && !searchInputBoxFocus" },
{ "key": "alt+down",              "command": "search.history.showNext",
                                     "when": "searchInputBoxFocus && searchViewletVisible" },
{ "key": "alt+up",                "command": "search.history.showPrevious",
                                     "when": "searchInputBoxFocus && searchViewletVisible" },
{ "key": "shift+cmd+r",           "command": "toggleExperimentalScreenReaderSupport" },
{ "key": "alt+cmd+c",             "command": "toggleSearchCaseSensitive",
                                     "when": "searchInputBoxFocus && searchViewletVisible" },
{ "key": "alt+cmd+r",             "command": "toggleSearchRegex",
                                     "when": "searchInputBoxFocus && searchViewletVisible" },
{ "key": "alt+cmd+w",             "command": "toggleSearchWholeWord",
                                     "when": "searchInputBoxFocus && searchViewletVisible" },
{ "key": "cmd+w",                 "command": "workbench.action.closeActiveEditor" },
{ "key": "cmd+k cmd+w",           "command": "workbench.action.closeAllEditors" },
{ "key": "cmd+k w",               "command": "workbench.action.closeEditorsInGroup" },
{ "key": "cmd+k f",               "command": "workbench.action.closeFolder" },
{ "key": "shift+escape",          "command": "workbench.action.closeMessages",
                                     "when": "globalMessageVisible" },
{ "key": "escape",                "command": "workbench.action.closeMessages",
                                     "when": "globalMessageVisible" },
{ "key": "alt+cmd+t",             "command": "workbench.action.closeOtherEditors" },
{ "key": "shift+escape",          "command": "workbench.action.closeQuickOpen",
                                     "when": "inQuickOpen" },
{ "key": "escape",                "command": "workbench.action.closeQuickOpen",
                                     "when": "inQuickOpen" },
{ "key": "cmd+w",                 "command": "workbench.action.closeWindow",
                                     "when": "!editorIsOpen" },
{ "key": "shift+cmd+w",           "command": "workbench.action.closeWindow" },
{ "key": "f5",                    "command": "workbench.action.debug.continue",
                                     "when": "inDebugMode" },
{ "key": "f6",                    "command": "workbench.action.debug.pause",
                                     "when": "inDebugMode" },
{ "key": "shift+cmd+f5",          "command": "workbench.action.debug.restart",
                                     "when": "inDebugMode" },
{ "key": "cmd+f5",                "command": "workbench.action.debug.run",
                                     "when": "!inDebugMode" },
{ "key": "f5",                    "command": "workbench.action.debug.start",
                                     "when": "!inDebugMode" },
{ "key": "shift+f11",             "command": "workbench.action.debug.stepOut",
                                     "when": "inDebugMode" },
{ "key": "f10",                   "command": "workbench.action.debug.stepOver",
                                     "when": "inDebugMode" },
{ "key": "shift+f5",              "command": "workbench.action.debug.stop",
                                     "when": "inDebugMode" },
{ "key": "cmd+k m",               "command": "workbench.action.editor.changeLanguageMode" },
{ "key": "cmd+k p",               "command": "workbench.action.files.copyPathOfActiveFile" },
{ "key": "cmd+n",                 "command": "workbench.action.files.newUntitledFile" },
{ "key": "cmd+o",                 "command": "workbench.action.files.openFileFolder" },
{ "key": "cmd+k r",               "command": "workbench.action.files.revealActiveFileInWindows" },
{ "key": "cmd+s",                 "command": "workbench.action.files.save" },
{ "key": "alt+cmd+s",             "command": "workbench.action.files.saveAll" },
{ "key": "shift+cmd+s",           "command": "workbench.action.files.saveAs" },
{ "key": "cmd+k o",               "command": "workbench.action.files.showOpenedFileInNewWindow" },
{ "key": "shift+cmd+f",           "command": "workbench.action.findInFiles",
                                     "when": "!searchInputBoxFocus" },
{ "key": "cmd+1",                 "command": "workbench.action.focusFirstEditorGroup" },
{ "key": "cmd+k cmd+right",       "command": "workbench.action.focusNextGroup" },
{ "key": "cmd+k cmd+left",        "command": "workbench.action.focusPreviousGroup" },
{ "key": "cmd+2",                 "command": "workbench.action.focusSecondEditorGroup" },
{ "key": "cmd+0",                 "command": "workbench.action.focusSideBar" },
{ "key": "cmd+3",                 "command": "workbench.action.focusThirdEditorGroup" },
{ "key": "ctrl+g",                "command": "workbench.action.gotoLine" },
{ "key": "shift+cmd+o",           "command": "workbench.action.gotoSymbol" },
{ "key": "escape",                "command": "workbench.action.hideInterfaceOverview",
                                     "when": "interfaceOverviewVisible" },
{ "key": "down",                  "command": "workbench.action.interactivePlayground.arrowDown",
                                     "when": "interactivePlaygroundFocus && !editorTextFocus" },
{ "key": "up",                    "command": "workbench.action.interactivePlayground.arrowUp",
                                     "when": "interactivePlaygroundFocus && !editorTextFocus" },
{ "key": "pagedown",              "command": "workbench.action.interactivePlayground.pageDown",
                                     "when": "interactivePlaygroundFocus && !editorTextFocus" },
{ "key": "pageup",                "command": "workbench.action.interactivePlayground.pageUp",
                                     "when": "interactivePlaygroundFocus && !editorTextFocus" },
{ "key": "cmd+k enter",           "command": "workbench.action.keepEditor" },
{ "key": "cmd+k cmd+r",           "command": "workbench.action.keybindingsReference" },
{ "key": "cmd+k left",            "command": "workbench.action.moveActiveEditorGroupLeft" },
{ "key": "cmd+k right",           "command": "workbench.action.moveActiveEditorGroupRight" },
{ "key": "cmd+k shift+cmd+left",  "command": "workbench.action.moveEditorLeftInGroup" },
{ "key": "cmd+k shift+cmd+right", "command": "workbench.action.moveEditorRightInGroup" },
{ "key": "ctrl+cmd+right",        "command": "workbench.action.moveEditorToNextGroup" },
{ "key": "ctrl+cmd+left",         "command": "workbench.action.moveEditorToPreviousGroup" },
{ "key": "ctrl+-",                "command": "workbench.action.navigateBack" },
{ "key": "ctrl+shift+-",          "command": "workbench.action.navigateForward" },
{ "key": "shift+cmd+n",           "command": "workbench.action.newWindow" },
{ "key": "shift+cmd+]",           "command": "workbench.action.nextEditor" },
{ "key": "alt+cmd+right",         "command": "workbench.action.nextEditor" },
{ "key": "ctrl+1",                "command": "workbench.action.openEditorAtIndex1" },
{ "key": "ctrl+2",                "command": "workbench.action.openEditorAtIndex2" },
{ "key": "ctrl+3",                "command": "workbench.action.openEditorAtIndex3" },
{ "key": "ctrl+4",                "command": "workbench.action.openEditorAtIndex4" },
{ "key": "ctrl+5",                "command": "workbench.action.openEditorAtIndex5" },
{ "key": "ctrl+6",                "command": "workbench.action.openEditorAtIndex6" },
{ "key": "ctrl+7",                "command": "workbench.action.openEditorAtIndex7" },
{ "key": "ctrl+8",                "command": "workbench.action.openEditorAtIndex8" },
{ "key": "ctrl+9",                "command": "workbench.action.openEditorAtIndex9" },
{ "key": "cmd+k cmd+s",           "command": "workbench.action.openGlobalKeybindings" },
{ "key": "cmd+,",                 "command": "workbench.action.openGlobalSettings" },
{ "key": "ctrl+0",                "command": "workbench.action.openLastEditorInGroup" },
{ "key": "ctrl+tab",              "command": "workbench.action.openNextRecentlyUsedEditorInGroup" },
{ "key": "ctrl+shift+tab",        "command": "workbench.action.openPreviousRecentlyUsedEditorInGroup" },
{ "key": "ctrl+r",                "command": "workbench.action.openRecent" },
{ "key": "shift+cmd+u",           "command": "workbench.action.output.toggleOutput" },
{ "key": "shift+cmd+[",           "command": "workbench.action.previousEditor" },
{ "key": "alt+cmd+left",          "command": "workbench.action.previousEditor" },
{ "key": "cmd+p",                 "command": "workbench.action.quickOpen" },
{ "key": "ctrl+q",                "command": "workbench.action.quickOpenView" },
{ "key": "cmd+q",                 "command": "workbench.action.quit" },
{ "key": "shift+cmd+t",           "command": "workbench.action.reopenClosedEditor" },
{ "key": "shift+cmd+h",           "command": "workbench.action.replaceInFiles" },
{ "key": "shift+cmd+j",           "command": "workbench.action.search.toggleQueryDetails",
                                     "when": "searchViewletVisible" },
{ "key": "cmd+k cmd+t",           "command": "workbench.action.selectTheme" },
{ "key": "alt+cmd+tab",           "command": "workbench.action.showAllEditors" },
{ "key": "cmd+t",                 "command": "workbench.action.showAllSymbols" },
{ "key": "f1",                    "command": "workbench.action.showCommands" },
{ "key": "shift+cmd+p",           "command": "workbench.action.showCommands" },
{ "key": "cmd+\\",                "command": "workbench.action.splitEditor" },
{ "key": "shift+cmd+b",           "command": "workbench.action.tasks.build" },
{ "key": "ctrl+shift+`",          "command": "workbench.action.terminal.new" },
{ "key": "shift+cmd+c",           "command": "workbench.action.terminal.openNativeConsole",
                                     "when": "!terminalFocus" },
{ "key": "cmd+down",              "command": "workbench.action.terminal.scrollDown",
                                     "when": "terminalFocus" },
{ "key": "pagedown",              "command": "workbench.action.terminal.scrollDownPage",
                                     "when": "terminalFocus" },
{ "key": "cmd+end",               "command": "workbench.action.terminal.scrollToBottom",
                                     "when": "terminalFocus" },
{ "key": "cmd+home",              "command": "workbench.action.terminal.scrollToTop",
                                     "when": "terminalFocus" },
{ "key": "cmd+up",                "command": "workbench.action.terminal.scrollUp",
                                     "when": "terminalFocus" },
{ "key": "pageup",                "command": "workbench.action.terminal.scrollUpPage",
                                     "when": "terminalFocus" },
{ "key": "ctrl+`",                "command": "workbench.action.terminal.toggleTerminal" },
{ "key": "alt+cmd+1",             "command": "workbench.action.toggleEditorGroupLayout" },
{ "key": "ctrl+cmd+f",            "command": "workbench.action.toggleFullScreen" },
{ "key": "cmd+j",                 "command": "workbench.action.togglePanel" },
{ "key": "cmd+b",                 "command": "workbench.action.toggleSidebarVisibility" },
{ "key": "cmd+k z",               "command": "workbench.action.toggleZenMode" },
{ "key": "cmd+numpad_add",        "command": "workbench.action.zoomIn" },
{ "key": "shift+cmd+=",           "command": "workbench.action.zoomIn" },
{ "key": "cmd+=",                 "command": "workbench.action.zoomIn" },
{ "key": "cmd+numpad_subtract",   "command": "workbench.action.zoomOut" },
{ "key": "shift+cmd+-",           "command": "workbench.action.zoomOut" },
{ "key": "cmd+-",                 "command": "workbench.action.zoomOut" },
{ "key": "cmd+numpad0",           "command": "workbench.action.zoomReset" },
{ "key": "shift+cmd+m",           "command": "workbench.actions.view.problems" },
{ "key": "shift+cmd+y",           "command": "workbench.debug.action.toggleRepl" },
{ "key": "cmd+k cmd+m",           "command": "workbench.extensions.action.showRecommendedKeymapExtensions" },
{ "key": "cmd+k e",               "command": "workbench.files.action.focusOpenEditorsView" },
{ "key": "shift+cmd+d",           "command": "workbench.view.debug" },
{ "key": "shift+cmd+e",           "command": "workbench.view.explorer" },
{ "key": "shift+cmd+x",           "command": "workbench.view.extensions" },
{ "key": "ctrl+shift+g",          "command": "workbench.view.git" },
{ "key": "shift+cmd+f",           "command": "workbench.view.search",
                                     "when": "!searchViewletVisible" },
{ "key": "f11",                   "command": "workbench.action.debug.stepInto",
                                     "when": "inDebugMode" },
{ "key": "cmd+k",                 "command": "workbench.action.terminal.clear",
                                     "when": "terminalFocus" },
{ "key": "enter",                 "command": "debug.renameWatchExpression",
                                     "when": "watchExpressionsFocused" },
{ "key": "enter",                 "command": "debug.setVariable",
                                     "when": "variablesFocused" },
{ "key": "space",                 "command": "debug.toggleBreakpoint",
                                     "when": "breakpointsFocused" },
{ "key": "alt+cmd+c",             "command": "copyFilePath",
                                     "when": "explorerViewletFocus && explorerViewletVisible" },
{ "key": "alt+cmd+backspace",     "command": "deleteFile",
                                     "when": "explorerViewletVisible && filesExplorerFocus" },
{ "key": "ctrl+enter",            "command": "explorer.openToSide",
                                     "when": "explorerViewletFocus && explorerViewletVisible" },
{ "key": "cmd+c",                 "command": "filesExplorer.copy",
                                     "when": "explorerViewletVisible && filesExplorerFocus" },
{ "key": "cmd+v",                 "command": "filesExplorer.paste",
                                     "when": "explorerViewletVisible && filesExplorerFocus" },
{ "key": "cmd+backspace",         "command": "moveFileToTrash",
                                     "when": "explorerViewletVisible && filesExplorerFocus" },
{ "key": "enter",                 "command": "renameFile",
                                     "when": "explorerViewletVisible && filesExplorerFocus" },
{ "key": "alt+cmd+r",             "command": "revealFileInOS",
                                     "when": "explorerViewletFocus && explorerViewletVisible" },
{ "key": "cmd+p",                 "command": "workbench.action.quickOpenNavigateNext",
                                     "when": "inQuickOpen" },
{ "key": "ctrl+q",                "command": "workbench.action.quickOpenNavigateNext",
                                     "when": "inQuickOpen" },
{ "key": "ctrl+tab",              "command": "workbench.action.quickOpenNavigateNext",
                                     "when": "inQuickOpen" },
{ "key": "shift+cmd+p",           "command": "workbench.action.quickOpenNavigatePrevious",
                                     "when": "inQuickOpen" },
{ "key": "ctrl+shift+q",          "command": "workbench.action.quickOpenNavigatePrevious",
                                     "when": "inQuickOpen" },
{ "key": "ctrl+shift+tab",        "command": "workbench.action.quickOpenNavigatePrevious",
                                     "when": "inQuickOpen" },
{ "key": "ctrl+n",                "command": "workbench.action.quickOpenSelectNext",
                                     "when": "inQuickOpen" },
{ "key": "ctrl+p",                "command": "workbench.action.quickOpenSelectPrevious",
                                     "when": "inQuickOpen" },
{ "key": "shift+cmd+v",           "command": "markdown.showPreview",
                                     "when": "editorFocus" },
{ "key": "cmd+k v",               "command": "markdown.showPreviewToSide",
                                     "when": "editorFocus" }
]


// 以下是其他可用命令:
// - compositionEnd
// - compositionStart
// - cursorWordEndLeft
// - cursorWordEndLeftSelect
// - cursorWordLeft
// - cursorWordLeftSelect
// - cursorWordRight
// - cursorWordRightSelect
// - cursorWordStartRight
// - cursorWordStartRightSelect
// - cut
// - debug.logToDebugConsole
// - default:compositionEnd
// - default:compositionStart
// - default:cut
// - default:paste
// - default:replacePreviousChar
// - default:type
// - defaultSettingsEditor.action.collapseAllGroups
// - deleteWordEndLeft
// - deleteWordEndRight
// - deleteWordStartLeft
// - deleteWordStartRight
// - editor.action.addSelectionToPreviousFindMatch
// - editor.action.clearoutput
// - editor.action.clipboardCopyWithSyntaxHighlightingAction
// - editor.action.detectIndentation
// - editor.action.findReferences
// - editor.action.format
// - editor.action.goToTypeDefinition
// - editor.action.indentUsingSpaces
// - editor.action.indentUsingTabs
// - editor.action.indentationToSpaces
// - editor.action.indentationToTabs
// - editor.action.insertSnippet
// - editor.action.inspectTMScopes
// - editor.action.moveCarretLeftAction
// - editor.action.moveCarretRightAction
// - editor.action.moveSelectionToPreviousFindMatch
// - editor.action.openLink
// - editor.action.peekTypeDefinition
// - editor.action.reindentlines
// - editor.action.showSnippets
// - editor.action.sortLinesAscending
// - editor.action.sortLinesDescending
// - editor.action.toggleRenderControlCharacter
// - editor.action.toggleRenderWhitespace
// - editor.action.transformToLowercase
// - editor.action.transformToUppercase
// - editor.action.transpose
// - editor.debug.action.conditionalBreakpoint
// - editor.debug.action.runToCursor
// - editor.debug.action.selectionToRepl
// - editor.debug.action.selectionToWatch
// - editor.debug.action.toggleColumnBreakpointContextMenu
// - editor.emmet.action.balanceInward
// - editor.emmet.action.balanceOutward
// - editor.emmet.action.decrementNumberByOne
// - editor.emmet.action.decrementNumberByOneTenth
// - editor.emmet.action.decrementNumberByTen
// - editor.emmet.action.evaluateMath
// - editor.emmet.action.incrementNumberByOne
// - editor.emmet.action.incrementNumberByOneTenth
// - editor.emmet.action.incrementNumberByTen
// - editor.emmet.action.matchingPair
// - editor.emmet.action.mergeLines
// - editor.emmet.action.nextEditPoint
// - editor.emmet.action.previousEditPoint
// - editor.emmet.action.reflectCSSValue
// - editor.emmet.action.removeTag
// - editor.emmet.action.selectNextItem
// - editor.emmet.action.selectPreviousItem
// - editor.emmet.action.splitJoinTag
// - editor.emmet.action.toggleComment
// - editor.emmet.action.updateImageSize
// - editor.emmet.action.updateTag
// - editor.emmet.action.wrapWithAbbreviation
// - enablescmpreview
// - explorer.newFile
// - explorer.newFolder
// - filesExplorer.findInFolder
// - javascript.goToProjectConfig
// - javascript.reloadProjects
// - js.projectStatus.command
// - paste
// - replacePreviousChar
// - setContext
// - type
// - typescript.goToProjectConfig
// - typescript.reloadProjects
// - typescript.selectTypeScriptVersion
// - update.showCurrentReleaseNotes
// - workbench.action.acceptSelectedQuickOpenItem
// - workbench.action.appPerf
// - workbench.action.clearEditorHistory
// - workbench.action.closeEditorsInOtherGroups
// - workbench.action.closeEditorsToTheLeft
// - workbench.action.closeEditorsToTheRight
// - workbench.action.closePanel
// - workbench.action.compareEditor.nextChange
// - workbench.action.compareEditor.previousChange
// - workbench.action.configureLanguageBasedSettings
// - workbench.action.configureLocale
// - workbench.action.debug.configure
// - workbench.action.debug.disconnect
// - workbench.action.debug.selectandstart
// - workbench.action.editor.changeEOL
// - workbench.action.editor.changeEncoding
// - workbench.action.evenEditorWidths
// - workbench.action.files.newFile
// - workbench.action.files.newFolder
// - workbench.action.files.openFileInNewWindow
// - workbench.action.files.revert
// - workbench.action.files.saveFiles
// - workbench.action.focusActiveEditorGroup
// - workbench.action.focusPanel
// - workbench.action.focusQuickOpen
// - workbench.action.git.clone
// - workbench.action.git.globalOpenChange
// - workbench.action.git.globalOpenFile
// - workbench.action.git.input-commit
// - workbench.action.git.publish
// - workbench.action.git.pull
// - workbench.action.git.push
// - workbench.action.git.pushToRemote
// - workbench.action.git.stage
// - workbench.action.git.startGitBranch
// - workbench.action.git.startGitCheckout
// - workbench.action.git.sync
// - workbench.action.git.undoLastCommit
// - workbench.action.git.unstage
// - workbench.action.installCommandLine
// - workbench.action.maximizeEditor
// - workbench.action.minimizeOtherEditors
// - workbench.action.navigateEditorGroups
// - workbench.action.nextEditorInGroup
// - workbench.action.openDocumentationUrl
// - workbench.action.openIntroductoryVideosUrl
// - workbench.action.openPreviousEditorFromHistory
// - workbench.action.openSnippets
// - workbench.action.openView
// - workbench.action.openWorkspaceSettings
// - workbench.action.previousEditorInGroup
// - workbench.action.reloadWindow
// - workbench.action.removeFromEditorHistory
// - workbench.action.reportIssues
// - workbench.action.reportPerformanceIssue
// - workbench.action.selectIconTheme
// - workbench.action.showEditorsInFirstGroup
// - workbench.action.showEditorsInSecondGroup
// - workbench.action.showEditorsInThirdGroup
// - workbench.action.showEmmetCommands
// - workbench.action.showErrorsWarnings
// - workbench.action.showInteractivePlayground
// - workbench.action.showInterfaceOverview
// - workbench.action.showWelcomePage
// - workbench.action.switchWindow
// - workbench.action.tasks.configureTaskRunner
// - workbench.action.tasks.runTask
// - workbench.action.tasks.showLog
// - workbench.action.tasks.terminate
// - workbench.action.tasks.test
// - workbench.action.terminal.copySelection
// - workbench.action.terminal.focus
// - workbench.action.terminal.focusAtIndex1
// - workbench.action.terminal.focusAtIndex2
// - workbench.action.terminal.focusAtIndex3
// - workbench.action.terminal.focusAtIndex4
// - workbench.action.terminal.focusAtIndex5
// - workbench.action.terminal.focusAtIndex6
// - workbench.action.terminal.focusAtIndex7
// - workbench.action.terminal.focusAtIndex8
// - workbench.action.terminal.focusAtIndex9
// - workbench.action.terminal.focusNext
// - workbench.action.terminal.focusPrevious
// - workbench.action.terminal.kill
// - workbench.action.terminal.paste
// - workbench.action.terminal.runActiveFile
// - workbench.action.terminal.runSelectedText
// - workbench.action.toggleActivityBarVisibility
// - workbench.action.toggleDevTools
// - workbench.action.toggleMaximizedPanel
// - workbench.action.toggleSidebarPosition
// - workbench.action.toggleStatusbarVisibility
// - workbench.action.uninstallCommandLine
// - workbench.customDebugRequest
// - workbench.debug.action.focusRepl
// - workbench.debug.panel.action.clearReplAction
// - workbench.debug.viewlet.action.addFunctionBreakpointAction
// - workbench.debug.viewlet.action.disableAllBreakpoints
// - workbench.debug.viewlet.action.enableAllBreakpoints
// - workbench.debug.viewlet.action.reapplyBreakpointsAction
// - workbench.debug.viewlet.action.removeAllBreakpoints
// - workbench.extensions.action.checkForUpdates
// - workbench.extensions.action.configureWorkspaceRecommendedExtensions
// - workbench.extensions.action.disableAll
// - workbench.extensions.action.disableAllWorkspace
// - workbench.extensions.action.enableAll
// - workbench.extensions.action.enableAllWorkspace
// - workbench.extensions.action.installExtensions
// - workbench.extensions.action.installVSIX
// - workbench.extensions.action.listOutdatedExtensions
// - workbench.extensions.action.openExtensionsFolder
// - workbench.extensions.action.showDisabledExtensions
// - workbench.extensions.action.showInstalledExtensions
// - workbench.extensions.action.showLanguageExtensions
// - workbench.extensions.action.showPopularExtensions
// - workbench.extensions.action.showRecommendedExtensions
// - workbench.extensions.action.showWorkspaceRecommendedExtensions
// - workbench.extensions.action.updateAllExtensions
// - workbench.files.action.collapseExplorerFolders
// - workbench.files.action.compareFileWith
// - workbench.files.action.focusFilesExplorer
// - workbench.files.action.refreshFilesExplorer
// - workbench.files.action.showActiveFileInExplorer
// - workbench.output.action.clearOutput
}