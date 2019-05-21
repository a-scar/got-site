export class Player {
    _id?: string;
    name: string;
    score: string;
    characterChoices?: [
        {
            name: 'Jon Snow';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Sansa Stark';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Arya Stark';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Bran Stark';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Cersei Lannister';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Jamie Lannister';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Tyrion Lannister';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Daenerys Targaryen';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Yara Greyjoy';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Theon Greyjoy';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Melisandre';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Jorah Mormont';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'The Hound';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'The Mountain';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Samwell Tarley';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Gilly';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Sam';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Lord Varys';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Brienne of Tarth';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Davos Seaworth';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Bronn';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Podrick Payne';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Tormund Giantsbane';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Grey Worm';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Gendry';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Beric Dondarrion';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Euron Greyjoy';
            alive: boolean;
            whiteWalker: boolean;
        },
        {
            name: 'Lyanna Mormont';
            alive: boolean;
            whiteWalker: boolean;
        }
    ];
    bonusQuestions?: {
        daenerysPregnant: boolean;
        killsNightKing: string;
        holdIronThrone: string;
    };
}
