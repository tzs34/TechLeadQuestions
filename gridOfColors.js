/* Given a grid of colors return the largest number 
adjacent colored squares
grid = [
['r', 'g', 'b'],
['r', 'r', 'r'],
['g', 'g', 'r']
]

Notes it might be good to make the solution as a class 
Solution().maxConnected(grid)
*/

class Solution{

    constructor(grid){
        this.grid = grid
        this.gridLen = this.grid[0].length
        this.rowLen = this.gridLen
        this.seenNodes = []
        this.neighbours = [
            [-1, 0],
            [0, -1],
            [1, 0],
            [0, 1],
            [1, 1],
            [-1, -1],
            [2,2],
            [-2, -2]

        ]
        this.gridData =[]
    }

    maxConnectedGrid(){
       let max = 0
       let {gridLen, rowLen} = this
       let colors = [].concat(...grid)
       this.gridData = colors.reduce((acc, color, index) => {
           let y = Math.trunc(index /  gridLen)
           let x = index > rowLen - 1 ? index%gridLen : index
           acc.push({id: `${x}${y}`, color, x, y})

           return acc

        }, [])
        
        let res = this.gridData.reduce( (acc, {color, x, y}) => {
            let children = this.getChildNodesSameColor({color, x, y})
            if(children.length > 0){
                if(acc[color]){
                    acc[color] += children.length
                }else{
                    acc[color] = children.length + 1// for starting node
                }
            }
            return acc
        }, {})

        console.log(res)
    }
        
    getChildNodesSameColor({color, x, y}){
        let {seenNodes} = this
            let nodes = this.neighbours.reduce((acc, [posX, posY])=> {
               let coordX = x + posX
                let coordY = y + posY
                if (this.withGridBounds(coordX, coordY)){
                    let currentNode = this.findNodeByCoords(coordX, coordY)
                
                    if(currentNode && currentNode.color === color && !seenNodes.includes(currentNode.id)){
                        seenNodes.push(currentNode.id)
                        acc.push(currentNode)
                    }
                }
                return acc
            }, [])

            return nodes
        }

    withGridBounds(coordX, coordY ) {
        let inBounds = false
        if(coordX >= 0 && coordY >= 0 && coordY <= this.gridLen && coordX <= this.rowLen){
            inBounds = true
        }
        return inBounds
    }

    findNodeById(id){
        this.gridData.find(node => id === node.id)
    }

    findNodeByCoords(x, y){
        let id = `${x}${y}`
        return this.gridData.find(node => id === node.id)
    }
}

let grid = [
    ['b', 'g', 'r'],
    ['r', 'r', 'g'],
    ['r', 'g', 'b']
    ]

let sol = new Solution(grid)
console.log(sol.maxConnectedGrid())