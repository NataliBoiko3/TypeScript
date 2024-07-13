
interface IForceUser {
  name: string;
  age: number;
  isDark: boolean;
  LightsaberColors: string[];
  image: string;

}



export const forceUsers:IForceUser[] = [
    {
        name: 'Darth Maul',
        age: 35,
        isDark: true,
        LightsaberColors: ['red'],
        image: 'https://th.bing.com/th/id/OIP.kcKr3yt_d_dnl-wymYNVwQHaNK?w=184&h=389&c=7&r=0&o=5&pid=1.7'
    },
    {
        name: 'Luke Skywalker',
        age: 30,
        isDark: false,
        LightsaberColors: ['green', 'blue'],
        image: 'https://www.bing.com/th?id=OIP.uPTRLR8uspCiafiunUqKfQHaMJ&w=140&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
    {
        name: 'Darth Vader',
        age: 50,
        isDark: true,
        LightsaberColors: ['blue', 'red'],
        image: 'https://th.bing.com/th/id/OIP.FTZfO4niXolvsezOXdHDTAHaEK?w=265&h=180&c=7&r=0&o=5&pid=1.7'
    },
    {
        name: 'Yoda',
        age: 1000,
        isDark: false,
        LightsaberColors: ['green'],
        image: 'https://th.bing.com/th/id/OIP.wCisIOu-Deh3T5fH1WjbWwHaG1?w=202&h=186&c=7&r=0&o=5&pid=1.7'
    },
    {
        name: 'Obi Wan',
        age: 52,
        isDark: false,
        LightsaberColors: ['blue'],
        image: 'https://th.bing.com/th/id/OIP.nGR30Zsf8eyLg2F4hWaqXwHaKl?w=145&h=207&c=7&r=0&o=5&pid=1.7'
    }
]

