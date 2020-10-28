const icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2Mi4zIiBoZWlnaHQ9IjQyLjE3MjY2IiB2aWV3Qm94PSIwLDAsNjIuMyw0Mi4xNzI2NiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMi4zNSwtMTU4LjU0Njg3KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yODQuNjUsMTkwLjMwMTY0YzAsMy42NDE3MSAtMy4yOTcxNSw3LjY3ODQ1IC0xMS43ODMyLDkuNTM2NjVjLTQuOTAwMzgsMS4wNzMwNCAtMTMuMDY5MDQsMC44NjQ5OCAtMTkuMzY2OCwwLjg2NDk4Yy02LjgyMDg1LDAgLTE0LjUxNDExLC0wLjA2NjM0IC0xOS42NDQ3MSwtMS4zMDc5OGMtNy44MDk5MSwtMS44OTAwNSAtMTEuNTA1MjksLTUuNjI2NjEgLTExLjUwNTI5LC05LjA5MzY2YzAsLTUuNzQ0NjcgMTMuOTQ2MzMsLTEwLjQwMTY0IDMxLjE1LC0xMC40MDE2NGMxNy4yMDM2NywwIDMxLjE1LDQuNjU2OTcgMzEuMTUsMTAuNDAxNjR6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjI4Ljc1LDE5NC40YzAsMCAtMC4xMDY3LC0xNy42NzQ4NCAwLC0yNC4yODMyNWMwLjE1MzAxLC05LjQ3NjM3IDE3LjE4NTAxLC0xMS41Njk4OSAyNS42LC0xMS41Njk4OWM4LjI0ODM0LDAgMjQuMjczMTIsNC44NDQ5NyAyNC40LDExLjU2OTg5YzAuMTQ0NDYsNy42NTY5OCAwLDI0LjI4MzI1IDAsMjQuMjgzMjV6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjMwLjM0MDc5LDE4NC4wMjQ4M2MwLDAgMTUuOTQ4MzgsMi45NTUwNSAyMy43OTU5NCwzLjA1NDRjNy42ODIyNiwwLjA5NzI2IDIyLjgwNDA2LC0yLjQ2NDQ0IDIyLjgwNDA2LC0yLjQ2NDQ0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjAwMDAiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvZz48L3N2Zz4=";

class Utilities {

  constructor() {}

  getInfo() {
    return {
      id: 'utilities',
      name: 'Utlities',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: ' [A] と [B]は全く同じ',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'isLessOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] ≦ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'isMoreOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] ≧ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'trueBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'falseBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] の [B]乗',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: '円周率'
        },
        {
          opcode: 'ternaryOperator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'もし [A] なら [B] でなければ [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'バナナ'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'りんご'
            }
          }
        },
        {
          opcode: 'letters',

          blockType: Scratch.BlockType.REPORTER,

          text: ' [START] から [END] までの文字を [STRING]から消す',
          arguments: {
            START: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            },
            END: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '赤いりんご'
            }
          }
        },
        {
          opcode: 'currentMillisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: '現在のミリ秒'
        },
        {
          opcode: 'fetchFrom',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get content from [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://translate-service.scratch.mit.edu/translate?language=eo&text=hello'
            }
          }
        },
        {
          opcode: 'parseJSON',

          blockType: Scratch.BlockType.REPORTER,

          text: '[PATH] of [JSON_STRING]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'フルーツ/りんご'
            },
            JSON_STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"フルーツ": {"りんご": 2, "バナナ": 3}, "total_フルーツ": 5}'
            }
          }
        },
        {
          opcode: 'stringToBoolean',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'regexReplace',

          blockType: Scratch.BlockType.REPORTER,

          text: 'replace [STRING] using the rule [REGEX] with [NEWSTRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'バナナはおいしい。私はバナナが好きだ。'
            },
            REGEX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'バナナ'
            },
            NEWSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'りんご'
            }
          }
        }
      ]
    }
  }

  isExactly({A, B}) {
    return A === B;
  }

  isLessOrEqual({A, B}) {
    return A <= B;
  }

  isMoreOrEqual({A, B}) {
    return A >= B;
  }

  trueBlock() {
    return true;
  }

  falseBlock() {
    return false;
  }

  exponent({A, B}) {
    return Math.pow(A, B);
  }

  pi() {
    return Math.PI;
  }

  ternaryOperator({A, B, C}) {
    return A ? B : C;
  }

  letters({STRING, START, END}) {
    return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
  }

  currentMillisecond() {
    return Date.now() % 1000;
  }

  fetchFrom({URL}) {
    return fetch(URL).then(res => res.text())
      .catch(err => '');
  }

  parseJSON({PATH, JSON_STRING}) {
    try {
      const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
      if (path[0] === '') path.splice(0, 1);
      if (path[path.length - 1] === '') path.splice(-1, 1);
      let json;
      try {
        json = JSON.parse(' ' + JSON_STRING);
      } catch (e) {
        return e.message;
      }
      path.forEach(prop => json = json[prop]);
      if (json === null) return 'null';
      else if (json === undefined) return '';
      else if (typeof json === 'object') return JSON.stringify(json);
      else return json.toString();
    } catch (err) {
      return '';
    }
  }

  stringToBoolean({STRING}) {
    return STRING;
  }

  regexReplace({STRING, REGEX, NEWSTRING}) {
    return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
  }

}

Scratch.extensions.register(new Utilities());
