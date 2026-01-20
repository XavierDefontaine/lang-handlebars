import { styleTags, tags } from "@lezer/highlight"

export const Highlight = styleTags({
    BlockOperator: tags.keyword,          // # ^ / *
    BlockHelper: tags.controlKeyword,     // if, each, unless, with, else
    BlockHelperInverse: tags.controlKeyword,
    "{{ }}": tags.strong,
    "{{{ }}}": tags.strong,
    Escape: tags.annotation,
    BlockComment: tags.comment,
    OnelineComment: tags.comment,
    Number: tags.number,
    String: tags.string,
    Identifier: tags.variableName,
    "~ @": tags.atom,
});
