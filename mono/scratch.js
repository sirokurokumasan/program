class Math {
  constructor() {}

  getInfo() {
    return {
      id: 'Blocks',
      name: 'Blocks',
      blocks: [
          {
          opcode: 'power', 
          blockType: Scratch.BlockType.REPORTER,
          text: '[X]の[N]乗',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
               },
            N: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
               }
             }
           }
         {
          opcode: 'power', 
          blockType: Scratch.BlockType.REPORTER,
          text: '[X]≧[N]',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
               },
            N: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: ''
               }
             }
           }
        ]
     }
  }

  power(args) {
    return Math.pow(args.X, args.N);
  }
}

Scratch.extensions.register(new Math());