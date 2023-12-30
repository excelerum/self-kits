export type ReferenceItem = {
  key: string
  text: string
  icon?: string
  shortcut?: string
  items?: ReferenceItem[]
}

export const REFERENCE_ITEMS: ReferenceItem[] = [
  {
    icon: 'mdi-flag',
    text: 'All Tokens',
    key: 'allTokens',
    items: []
  },
  {
    icon: 'mdi-flag',
    text: 'Common Tokens',
    key: 'commonTokens',
    items: [
      {
        text: 'A single character of: a, b or c',
        shortcut: '[abc]',
        key: 'aSingleCharacterOfABOrC'
      },
      {
        text: 'A character except: a, b or c',
        shortcut: '[^abc]',
        key: 'aCharacterExceptABOrC'
      },
      {
        text: 'A character in the range: a-z',
        shortcut: '[a-z]',
        key: 'aCharacterInTheRangeAZ'
      },
      {
        text: 'A character not in the range: a-z',
        shortcut: '[^a-z]',
        key: 'aCharacterNotInTheRangeAZ'
      },
      {
        text: 'A character in the range: a-z or A-Z',
        shortcut: '[a-zA-Z]',
        key: 'aCharacterInTheRangeAZOrAZ'
      },
      {
        text: 'Any single character',
        shortcut: '.',
        key: 'anySingleCharacter'
      },
      {
        text: 'Alternate - match either a or b',
        shortcut: 'a|b',
        key: 'alternateMatchEitherAOrB'
      },
      {
        text: 'Any whitespace character',
        shortcut: '\\s',
        key: 'anyWhitespaceCharacter'
      },
      {
        text: 'Any non-whitespace character',
        shortcut: '\\S',
        key: 'anyNonWhitespaceCharacter'
      },
      {
        text: 'Any digit',
        shortcut: '\\d',
        key: 'anyDigit'
      },
      {
        text: 'Any non-digit',
        shortcut: '\\D',
        key: 'anyNonDigit'
      },
      {
        text: 'Any word character',
        shortcut: '\\w',
        key: 'anyWordCharacter'
      },
      {
        text: 'Any non-word character',
        shortcut: '\\W',
        key: 'anyNonWordCharacter'
      },
      {
        text: 'Match everything enclosed',
        shortcut: '(?:...)',
        key: 'matchEverythingEnclosed'
      },
      {
        text: 'Capture everything enclosed',
        shortcut: '(...)',
        key: 'captureEverythingEnclosed'
      },
      {
        text: 'Zero or one of a',
        shortcut: 'a?',
        key: 'zeroOrOneOfA'
      },
      {
        text: 'Zero or more of a',
        shortcut: 'a*',
        key: 'zeroOrMoreOfA'
      },
      {
        text: 'One or more of a',
        shortcut: 'a+',
        key: 'oneOrMoreOfA'
      },
      {
        text: 'Exactly 3 of a',
        shortcut: 'a{3}',
        key: 'exactly3OfA'
      },
      {
        text: '3 or more of a',
        shortcut: 'a{3,}',
        key: '3OrMoreOfA'
      },
      {
        text: 'Between 3 and 6 of a',
        shortcut: 'a{3,6}',
        key: 'between3And6OfA'
      },
      {
        text: 'Start of string',
        shortcut: '^',
        key: 'startOfString'
      },
      {
        text: 'End of string',
        shortcut: '$',
        key: 'endOfString'
      },
      {
        text: 'A word boundary',
        shortcut: '\\b',
        key: 'aWordBoundary'
      },
      {
        text: 'Non-word boundary',
        shortcut: '\\B',
        key: 'nonWordBoundary'
      }
    ]
  },
  {
    icon: 'mdi-flag',
    text: 'General Tokens',
    key: 'generalTokens',
    items: [
      {
        text: 'Newline',
        shortcut: '\\n',
        key: 'newline'
      },
      {
        text: 'Carriage return',
        shortcut: '\\r',
        key: 'carriageReturn'
      },
      {
        text: 'Tab',
        shortcut: '\\t',
        key: 'tab'
      },
      {
        text: 'Null character',
        shortcut: '\\0',
        key: 'nullCharacter'
      }
    ]
  },
  {
    icon: 'mdi-flag',
    text: 'Anchors',
    key: 'anchors',
    items: [
      {
        text: 'Start of match',
        shortcut: '\\G',
        key: 'startOfMatch'
      },
      {
        text: 'Start of string',
        shortcut: '^',
        key: 'startOfString'
      },
      {
        text: 'End of string',
        shortcut: '$',
        key: 'endOfString'
      },
      {
        text: 'Start of string',
        shortcut: '\\A',
        key: 'startOfString'
      },
      {
        text: 'End of string',
        shortcut: '\\Z',
        key: 'endOfString'
      },
      {
        text: 'Absolute end of string',
        shortcut: '\\z',
        key: 'absoluteEndOfString'
      },
      {
        text: 'A word boundary',
        shortcut: '\\b',
        key: 'aWordBoundary'
      },
      {
        text: 'Non-word boundary',
        shortcut: '\\B',
        key: 'nonWordBoundary'
      }
    ]
  },
  {
    icon: 'mdi-flag',
    text: 'Meta Sequences',
    key: 'metaSequences',
    items: [
      {
        text: 'Any single character',
        shortcut: '.',
        key: 'anySingleCharacter'
      },
      {
        text: 'Alternate - match either a or b',
        shortcut: 'a|b',
        key: 'alternateMatchEitherAOrB'
      },
      {
        text: 'Any whitespace character',
        shortcut: '\\s',
        key: 'anyWhitespaceCharacter'
      },
      {
        text: 'Any non-whitespace character',
        shortcut: '\\S',
        key: 'anyNonWhitespaceCharacter'
      },
      {
        text: 'Any digit',
        shortcut: '\\d',
        key: 'anyDigit'
      },
      {
        text: 'Any non-digit',
        shortcut: '\\D',
        key: 'anyNonDigit'
      },
      {
        text: 'Any word character',
        shortcut: '\\w',
        key: 'anyWordCharacter'
      },
      {
        text: 'Any non-word character',
        shortcut: '\\W',
        key: 'anyNonWordCharacter'
      },
      {
        text: 'Any Unicode sequences, linebreaks included',
        shortcut: '\\X',
        key: 'anyUnicodeSequencesLinebreaksIncluded'
      },
      {
        text: 'Match one data unit',
        shortcut: '\\C',
        key: 'matchOneDataUnit'
      },
      {
        text: 'Unicode newlines',
        shortcut: '\\R',
        key: 'unicodeNewlines'
      },
      {
        text: 'Match anything but a newline',
        shortcut: '\\N',
        key: 'matchAnythingButANewline'
      },
      {
        text: 'Vertical whitespace character',
        shortcut: '\\v',
        key: 'verticalWhitespaceCharacter'
      },
      {
        text: 'Negation of \\v',
        shortcut: '\\V',
        key: 'negationOfV'
      },
      {
        text: 'Horizontal whitespace character',
        shortcut: '\\h',
        key: 'horizontalWhitespaceCharacter'
      },
      {
        text: 'Negation of \\h',
        shortcut: '\\H',
        key: 'negationOfH'
      },
      {
        text: 'Reset match',
        shortcut: '\\K',
        key: 'resetMatch'
      },
      {
        text: 'Match subpattern number #',
        shortcut: '\\#',
        key: 'matchSubpatternNumber'
      },
      {
        text: 'Unicode property X',
        shortcut: '\\pX',
        key: 'unicodePropertyX'
      },
      {
        text: 'Unicode property or script category',
        shortcut: '\\p{...}',
        key: 'unicodePropertyOrScriptCategory'
      },
      {
        text: 'Negation of \\pX',
        shortcut: '\\PX',
        key: 'negationOfPX'
      },
      {
        text: 'Negation of \\p',
        shortcut: '\\P{...}',
        key: 'negationOfP'
      },
      {
        text: 'Quote; treat as literals',
        shortcut: '\\Q...\\E',
        key: 'quoteTreatAsLiterals'
      },
      {
        text: 'Match subpattern `name`',
        shortcut: '\\k{name}',
        key: 'matchSubpatternName'
      },
      {
        text: 'Match subpattern `name`',
        shortcut: '\\k<name>',
        key: 'matchSubpatternName'
      },
      {
        text: 'Match subpattern `name`',
        shortcut: "\\k'name'",
        key: 'matchSubpatternName'
      },
      {
        text: 'Match nth subpattern',
        shortcut: '\\gn',
        key: 'matchNthSubpattern'
      },
      {
        text: 'Match nth subpattern',
        shortcut: '\\g{n}',
        key: 'matchNthSubpattern'
      },
      {
        text: 'Match text the nth relative previous subpattern matched',
        shortcut: '\\g{-n}',
        key: 'matchTextTheNthRelativePreviousSubpatternMatched'
      },
      {
        text: 'Match expression defined in the nth capture group',
        shortcut: '\\g<n>',
        key: 'matchExpressionDefinedInTheNthCaptureGroup'
      },
      {
        text: 'Match expression defined in the nth relative upcoming capture group.',
        shortcut: '\\g<+n>',
        key: 'matchExpressionDefinedInTheNthRelativeUpcomingCaptureGroup'
      },
      {
        text: 'Match expression defined in the nth capture group.',
        shortcut: "\\g'n'",
        key: 'matchExpressionDefinedInTheNthCaptureGroup'
      },
      {
        text: 'Match expression defined in the nth relative upcoming subpattern',
        shortcut: "\\g'+n'",
        key: 'matchExpressionDefinedInTheNthRelativeUpcomingSubpattern'
      },
      {
        text: 'Match previously-named capture group `letter`',
        shortcut: '\\g{letter}',
        key: 'matchPreviouslyNamedCaptureGroupLetter'
      },
      {
        text: 'Match expression defined in the capture group named "letter"',
        shortcut: '\\g<letter>',
        key: 'matchExpressionDefinedInTheCaptureGroupNamedLetter'
      },
      {
        text: 'Match expression defined in the named capture group `letter`',
        shortcut: "\\g'letter'",
        key: 'matchExpressionDefinedInTheNamedCaptureGroupLetter'
      },
      {
        text: 'Hex character YY',
        shortcut: '\\xYY',
        key: 'hexCharacterYy'
      },
      {
        text: 'Hex character YYYY',
        shortcut: '\\x{YYYY}',
        key: 'hexCharacterYyyy'
      },
      {
        text: 'Octal character ddd',
        shortcut: '\\ddd',
        key: 'octalCharacterDdd'
      },
      {
        text: 'Control character Y',
        shortcut: '\\cY',
        key: 'controlCharacterY'
      },
      {
        text: 'Backspace character',
        shortcut: '[\\b]',
        key: 'backspaceCharacter'
      },
      {
        text: 'Makes any character literal',
        shortcut: '\\',
        key: 'makesAnyCharacterLiteral'
      }
    ]
  },
  {
    icon: 'mdi-flag',
    text: 'Quantifiers',
    key: 'quantifiers',
    items: [
      {
        text: 'Zero or one of a',
        shortcut: 'a?',
        key: 'zeroOrOneOfA'
      },
      {
        text: 'Zero or more of a',
        shortcut: 'a*',
        key: 'zeroOrMoreOfA'
      },
      {
        text: 'One or more of a',
        shortcut: 'a+',
        key: 'oneOrMoreOfA'
      },
      {
        text: 'Exactly 3 of a',
        shortcut: 'a{3}',
        key: 'exactly3OfA'
      },
      {
        text: '3 or more of a',
        shortcut: 'a{3,}',
        key: '3OrMoreOfA'
      },
      {
        text: 'Between 3 and 6 of a',
        shortcut: 'a{3,6}',
        key: 'between3And6OfA'
      },
      {
        text: 'Greedy quantifier',
        shortcut: 'a*',
        key: 'greedyQuantifier'
      },
      {
        text: 'Lazy quantifier',
        shortcut: 'a*?',
        key: 'lazyQuantifier'
      },
      {
        text: 'Possessive quantifier',
        shortcut: 'a*+',
        key: 'possessiveQuantifier'
      }
    ]
  },
  {
    icon: 'mdi-flag',
    text: 'Group Constructs',
    key: 'groupConstructs',
    items: [
      {
        text: 'Match everything enclosed',
        shortcut: '(?:...)',
        key: 'matchEverythingEnclosed'
      },
      {
        text: 'Capture everything enclosed',
        shortcut: '(...)',
        key: 'captureEverythingEnclosed'
      },
      {
        text: 'Atomic group (non-capturing)',
        shortcut: '(?>...)',
        key: 'atomicGroupNonCapturing'
      },
      {
        text: 'Duplicate/reset subpattern group number',
        shortcut: '(?|...)',
        key: 'duplicateResetSubpatternGroupNumber'
      },
      {
        text: 'Comment group',
        shortcut: '(?#...)',
        key: 'commentGroup'
      },
      {
        text: 'Named Capturing Group',
        shortcut: "(?'name'...)",
        key: 'namedCapturingGroup'
      },
      {
        text: 'Named Capturing Group',
        shortcut: '(?<name>...)',
        key: 'namedCapturingGroup'
      },
      {
        text: 'Named Capturing Group',
        shortcut: '(?P<name>...)',
        key: 'namedCapturingGroup'
      },
      {
        text: 'Inline modifiers',
        shortcut: '(?imsxUJnxx)',
        key: 'inlineModifiers'
      },
      {
        text: 'Localized inline modifiers',
        shortcut: '(?imsxUJnxx:...)',
        key: 'localizedInlineModifiers'
      },
      {
        text: 'Conditional statement',
        shortcut: '(?(1)yes|no)',
        key: 'conditionalStatement'
      },
      {
        text: 'Conditional statement',
        shortcut: '(?(R)yes|no)',
        key: 'conditionalStatement'
      },
      {
        text: 'Recursive Conditional statement',
        shortcut: '(?(R#)yes|no)',
        key: 'recursiveConditionalStatement'
      },
      {
        text: 'Conditional statement',
        shortcut: '(?(R&name)yes|no)',
        key: 'conditionalStatement'
      },
      {
        text: 'Lookahead conditional',
        shortcut: '(?(?=...)yes|no)',
        key: 'lookaheadConditional'
      },
      {
        text: 'Lookbehind conditional',
        shortcut: '(?(?<=...)yes|no)',
        key: 'lookbehindConditional'
      },
      {
        text: 'Recurse entire pattern',
        shortcut: '(?R)',
        key: 'recurseEntirePattern'
      },
      {
        text: 'Match expression defined in capture group 1',
        shortcut: '(?1)',
        key: 'matchExpressionDefinedInCaptureGroup1'
      },
      {
        text: 'Match expression defined in the first relative capture group',
        shortcut: '(?+1)',
        key: 'matchExpressionDefinedInTheFirstRelativeCaptureGroup'
      },
      {
        text: 'Match expression defined in capture group `name`',
        shortcut: '(?&name)',
        key: 'matchExpressionDefinedInCaptureGroupName'
      },
      {
        text: 'Match subpattern `name`',
        shortcut: '(?P=name)',
        key: 'matchSubpatternName'
      },
      {
        text: 'Match expression defined in the capture group "{name}"',
        shortcut: '(?P>name)',
        key: 'matchExpressionDefinedInTheCaptureGroupName'
      },
      {
        text: 'Pre-define patterns before using them',
        shortcut: '(?(DEFINE)...)',
        key: 'preDefinePatternsBeforeUsingThem'
      },
      {
        text: 'Positive Lookahead',
        shortcut: '(?=...)',
        key: 'positiveLookahead'
      },
      {
        text: 'Negative Lookahead',
        shortcut: '(?!...)',
        key: 'negativeLookahead'
      },
      {
        text: 'Positive Lookbehind',
        shortcut: '(?<=...)',
        key: 'positiveLookbehind'
      },
      {
        text: 'Negative Lookbehind',
        shortcut: '(?<!...)',
        key: 'negativeLookbehind'
      },
      {
        text: 'Control verb',
        shortcut: '(*ACCEPT)',
        key: 'controlVerb'
      },
      {
        text: 'Control verb',
        shortcut: '(*FAIL)',
        key: 'controlVerb'
      },
      {
        text: 'Control verb',
        shortcut: '(*MARK:NAME)',
        key: 'controlVerb'
      },
      {
        text: 'Control verb',
        shortcut: '(*COMMIT)',
        key: 'controlVerb'
      },
      {
        text: 'Control verb',
        shortcut: '(*PRUNE)',
        key: 'controlVerb'
      },
      {
        text: 'Control verb',
        shortcut: '(*SKIP)',
        key: 'controlVerb'
      },
      {
        text: 'Control verb',
        shortcut: '(*THEN)',
        key: 'controlVerb'
      },
      {
        text: 'Pattern modifier',
        shortcut: '(*UTF)',
        key: 'patternModifier'
      },
      {
        text: 'Pattern modifier',
        shortcut: '(*UTF8)',
        key: 'patternModifier'
      },
      {
        text: 'Pattern modifier',
        shortcut: '(*UTF16)',
        key: 'patternModifier'
      },
      {
        text: 'Pattern modifier',
        shortcut: '(*UTF32)',
        key: 'patternModifier'
      },
      {
        text: 'Pattern modifier',
        shortcut: '(*UCP)',
        key: 'patternModifier'
      },
      {
        text: 'Line break modifier',
        shortcut: '(*CR)',
        key: 'lineBreakModifier'
      },
      {
        text: 'Line break modifier',
        shortcut: '(*LF)',
        key: 'lineBreakModifier'
      },
      {
        text: 'Line break modifier',
        shortcut: '(*CRLF)',
        key: 'lineBreakModifier'
      },
      {
        text: 'Line break modifier',
        shortcut: '(*ANYCRLF)',
        key: 'lineBreakModifier'
      },
      {
        text: 'Line break modifier',
        shortcut: '(*ANY)',
        key: 'lineBreakModifier'
      },
      {
        text: 'Empty match modifier',
        shortcut: '(*NOTEMPTY)',
        key: 'emptyMatchModifier'
      },
      {
        text: 'Empty match modifier',
        shortcut: '(*NOTEMPTY_ATSTART)',
        key: 'emptyMatchModifier'
      },
      {
        text: 'JIT Modifier',
        shortcut: '(*NO_JIT)',
        key: 'jitModifier'
      },
      {
        text: 'Line break modifier',
        shortcut: '\\R',
        key: 'lineBreakModifier'
      },
      {
        text: 'Line break modifier',
        shortcut: '(*BSR_ANYCRLF)',
        key: 'lineBreakModifier'
      },
      {
        text: 'Line break modifier',
        shortcut: '(*BSR_UNICODE)',
        key: 'lineBreakModifier'
      },
      {
        text: 'Regex engine modifier',
        shortcut: '(*LIMIT_MATCH=x)',
        key: 'regexEngineModifier'
      },
      {
        text: 'Regex engine modifier',
        shortcut: '(*LIMIT_RECURSION=d)',
        key: 'regexEngineModifier'
      },
      {
        text: 'Regex engine modifier',
        shortcut: '(*NO_AUTO_POSSESS)',
        key: 'regexEngineModifier'
      },
      {
        text: 'Regex engine modifier',
        shortcut: '(*NO_START_OPT)',
        key: 'regexEngineModifier'
      }
    ]
  },
  {
    icon: 'mdi-flag',
    text: 'Character Classes',
    key: 'characterClasses',
    items: [
      {
        text: 'A single character of: a, b or c',
        shortcut: '[abc]',
        key: 'aSingleCharacterOfABOrC'
      },
      {
        text: 'A character except: a, b or c',
        shortcut: '[^abc]',
        key: 'aCharacterExceptABOrC'
      },
      {
        text: 'A character in the range: a-z',
        shortcut: '[a-z]',
        key: 'aCharacterInTheRangeAZ'
      },
      {
        text: 'A character not in the range: a-z',
        shortcut: '[^a-z]',
        key: 'aCharacterNotInTheRangeAZ'
      },
      {
        text: 'A character in the range: a-z or A-Z',
        shortcut: '[a-zA-Z]',
        key: 'aCharacterInTheRangeAZOrAZ'
      },
      {
        text: 'Letters and digits',
        shortcut: '[[:alnum:]]',
        key: 'lettersAndDigits'
      },
      {
        text: 'Letters',
        shortcut: '[[:alpha:]]',
        key: 'letters'
      },
      {
        text: 'ASCII codes 0-127',
        shortcut: '[[:ascii:]]',
        key: 'asciiCodes0127'
      },
      {
        text: 'Space or tab only',
        shortcut: '[[:blank:]]',
        key: 'spaceOrTabOnly'
      },
      {
        text: 'Control characters',
        shortcut: '[[:cntrl:]]',
        key: 'controlCharacters'
      },
      {
        text: 'Decimal digits',
        shortcut: '[[:digit:]]',
        key: 'decimalDigits'
      },
      {
        text: 'Visible characters (not space)',
        shortcut: '[[:graph:]]',
        key: 'visibleCharactersNotSpace'
      },
      {
        text: 'Lowercase letters',
        shortcut: '[[:lower:]]',
        key: 'lowercaseLetters'
      },
      {
        text: 'Visible characters',
        shortcut: '[[:print:]]',
        key: 'visibleCharacters'
      },
      {
        text: 'Visible punctuation characters',
        shortcut: '[[:punct:]]',
        key: 'visiblePunctuationCharacters'
      },
      {
        text: 'Whitespace',
        shortcut: '[[:space:]]',
        key: 'whitespace'
      },
      {
        text: 'Uppercase letters',
        shortcut: '[[:upper:]]',
        key: 'uppercaseLetters'
      },
      {
        text: 'Word characters',
        shortcut: '[[:word:]]',
        key: 'wordCharacters'
      },
      {
        text: 'Hexadecimal digits',
        shortcut: '[[:xdigit:]]',
        key: 'hexadecimalDigits'
      },
      {
        text: 'Start of word',
        shortcut: '[[:<:]]',
        key: 'startOfWord'
      },
      {
        text: 'End of word',
        shortcut: '[[:>:]]',
        key: 'endOfWord'
      }
    ]
  },
  {
    icon: 'mdi-flag',
    text: 'Flags/Modifiers',
    key: 'flagsModifiers',
    items: [
      {
        text: 'Global',
        shortcut: 'g',
        key: 'global'
      },
      {
        text: 'Multiline',
        shortcut: 'm',
        key: 'multiline'
      },
      {
        text: 'Case insensitive',
        shortcut: 'i',
        key: 'caseInsensitive'
      },
      {
        text: 'Ignore whitespace / verbose',
        shortcut: 'x',
        key: 'ignoreWhitespaceVerbose'
      },
      {
        text: 'Single line',
        shortcut: 's',
        key: 'singleLine'
      },
      {
        text: 'Unicode',
        shortcut: 'u',
        key: 'unicode'
      },
      {
        text: 'eXtra',
        shortcut: 'X',
        key: 'eXtra'
      },
      {
        text: 'Ungreedy',
        shortcut: 'U',
        key: 'ungreedy'
      },
      {
        text: 'Anchor',
        shortcut: 'A',
        key: 'anchor'
      },
      {
        text: 'Duplicate group names',
        shortcut: 'J',
        key: 'duplicateGroupNames'
      },
      {
        text: 'Non-capturing groups',
        shortcut: 'n',
        key: 'nonCapturingGroups'
      },
      {
        text: 'Ignore all whitespace / verbose',
        shortcut: 'xx',
        key: 'ignoreAllWhitespaceVerbose'
      }
    ]
  },
  {
    icon: 'mdi-flag',
    text: 'Substitution',
    key: 'substitution',
    items: [
      {
        text: 'Complete match contents',
        shortcut: '$0',
        key: 'completeMatchContents'
      },
      {
        text: 'Contents in capture group 1',
        shortcut: '$1',
        key: 'contentsInCaptureGroup1'
      },
      {
        text: 'Insert a dollar sign',
        shortcut: '$$',
        key: 'insertADollarSign'
      },
      {
        text: 'Contents in capture group `foo`',
        shortcut: '${foo}',
        key: 'contentsInCaptureGroupFoo'
      },
      {
        text: 'Hexadecimal replacement values',
        shortcut: '\\x20',
        key: 'hexadecimalReplacementValues'
      },
      {
        text: 'Hexadecimal replacement values',
        shortcut: '\\x{06fa}',
        key: 'hexadecimalReplacementValues'
      },
      {
        text: 'Insert a tab',
        shortcut: '\\t',
        key: 'insertATab'
      },
      {
        text: 'Insert a carriage return',
        shortcut: '\\r',
        key: 'insertACarriageReturn'
      },
      {
        text: 'Insert a newline',
        shortcut: '\\n',
        key: 'insertANewline'
      },
      {
        text: 'Insert a form-feed',
        shortcut: '\\f',
        key: 'insertAFormFeed'
      },
      {
        text: 'Uppercase Transformation',
        shortcut: '\\U',
        key: 'uppercaseTransformation'
      },
      {
        text: 'Lowercase Transformation',
        shortcut: '\\L',
        key: 'lowercaseTransformation'
      },
      {
        text: 'Terminate any Transformation',
        shortcut: '\\E',
        key: 'terminateAnyTransformation'
      },
      {
        text: 'Conditional replacement',
        shortcut: '${1:+foo:bar}',
        key: 'conditionalReplacement'
      },
      {
        text: 'Insert the escaped literal',
        shortcut: '\\[',
        key: 'insertTheEscapedLiteral'
      }
    ]
  }
]

export const LOCALES = [
  {
    value: 'ar-SA',
    title: 'Arabic (Saudi Arabia)'
  },
  {
    value: 'bn-BD',
    title: 'Bangla (Bangladesh)'
  },
  {
    value: 'bn-IN',
    title: 'Bangla (India)'
  },
  {
    value: 'cs-CZ',
    title: 'Czech (Czech Republic)'
  },
  {
    value: 'da-DK',
    title: 'Danish (Denmark)'
  },
  {
    value: 'de-AT',
    title: 'Austrian German'
  },
  {
    value: 'de-CH',
    title: '"Swiss" German'
  },
  {
    value: 'de-DE',
    title: 'Standard German (as spoken in Germany)'
  },
  {
    value: 'el-GR',
    title: 'Modern Greek'
  },
  {
    value: 'en-AU',
    title: 'Australian English'
  },
  {
    value: 'en-CA',
    title: 'Canadian English'
  },
  {
    value: 'en-GB',
    title: 'British English'
  },
  {
    value: 'en-IE',
    title: 'Irish English'
  },
  {
    value: 'en-IN',
    title: 'Indian English'
  },
  {
    value: 'en-NZ',
    title: 'New Zealand English'
  },
  {
    value: 'en-US',
    title: 'US English'
  },
  {
    value: 'en-ZA',
    title: 'English (South Africa)'
  },
  {
    value: 'es-AR',
    title: 'Argentine Spanish'
  },
  {
    value: 'es-CL',
    title: 'Chilean Spanish'
  },
  {
    value: 'es-CO',
    title: 'Colombian Spanish'
  },
  {
    value: 'es-ES',
    title: 'Castilian Spanish (as spoken in Central-Northern Spain)'
  },
  {
    value: 'es-MX',
    title: 'Mexican Spanish'
  },
  {
    value: 'es-US',
    title: 'American Spanish'
  },
  {
    value: 'fa-IR',
    title: 'Iranian (Iran)'
  },
  {
    value: 'fi-FI',
    title: 'Finnish (Finland)'
  },
  {
    value: 'fr-BE',
    title: 'Belgian French'
  },
  {
    value: 'fr-CA',
    title: 'Canadian French'
  },
  {
    value: 'fr-CH',
    title: '"Swiss" French'
  },
  {
    value: 'fr-FR',
    title: 'Standard French (especially in France)'
  },
  {
    value: 'he-IL',
    title: 'Hebrew (Israel)'
  },
  {
    value: 'hi-IN',
    title: 'Hindi (India)'
  },
  {
    value: 'hu-HU',
    title: 'Hungarian (Hungary)'
  },
  {
    value: 'id-ID',
    title: 'Indonesian (Indonesia)'
  },
  {
    value: 'it-CH',
    title: '"Swiss" Italian'
  },
  {
    value: 'it-IT',
    title: 'Standard Italian (as spoken in Italy)'
  },
  {
    value: 'ja-JP',
    title: 'Japanese (Japan)'
  },
  {
    value: 'ko-KR',
    title: 'Korean (Republic of Korea)'
  },
  {
    value: 'nl-BE',
    title: 'Belgian Dutch'
  },
  {
    value: 'nl-NL',
    title: 'Standard Dutch (as spoken in The Netherlands)'
  },
  {
    value: 'no-NO',
    title: 'Norwegian (Norway)'
  },
  {
    value: 'pl-PL',
    title: 'Polish (Poland)'
  },
  {
    value: 'pt-BR',
    title: 'Brazilian Portuguese'
  },
  {
    value: 'pt-PT',
    title: 'European Portuguese (as written and spoken in Portugal)'
  },
  {
    value: 'ro-RO',
    title: 'Romanian (Romania)'
  },
  {
    value: 'ru-RU',
    title: 'Russian (Russian Federation)'
  },
  {
    value: 'sk-SK',
    title: 'Slovak (Slovakia)'
  },
  {
    value: 'sv-SE',
    title: 'Swedish (Sweden)'
  },
  {
    value: 'ta-IN',
    title: 'Indian Tamil'
  },
  {
    value: 'ta-LK',
    title: 'Sri Lankan Tamil'
  },
  {
    value: 'th-TH',
    title: 'Thai (Thailand)'
  },
  {
    value: 'tr-TR',
    title: 'Turkish (Turkey)'
  },
  {
    value: 'zh-CN',
    title: 'Mainland China, simplified characters'
  },
  {
    value: 'zh-HK',
    title: 'Hong Kong, traditional characters'
  },
  {
    value: 'zh-TW',
    title: 'Taiwan, traditional characters'
  }
]
