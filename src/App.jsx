import { useState } from 'react'
import './App.css'
import Chart from "./components/Chart/Chart.jsx";

function App() {

    const [values, setValues] = useState([15, 38, 7, 46, 5, 21, 41, 23, 25, 37, 42, 49, 35, 16, 31, 20, 26, 10,
        2, 44, 19, 12, 18, 36, 13, 0, 28, 29, 40, 33, 48, 32, 30, 45, 39, 9, 1, 8, 47, 6, 43, 3, 22, 27, 24, 4, 34, 11,
        50, 14, 17]
)

    const selectionSort = async () => {
        let min;
        let vals = [...values]
        for (let i = 0; i < vals.length; i++) {
            min = i
            for (let j = i + 1; j < vals.length; j++) {
                if (vals[j] < vals[min]) {
                    min = j
                }
            }
            let tmp = vals[min]
            vals[min] = vals[i]
            vals[i] = tmp
            setValues( [...vals])
            await wait(100)
        }
        setValues(vals)
    }

    const bubbleSort = async () => {

    }

    const mergeSort = async () => {

    }

    const quickSort = async () => {

    }

    const wait = (time) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(true), time)
        });
    };

    return (
        <div className="App">
            <Chart
                values={values}
                selection={selectionSort}
                bubble={bubbleSort}
                merge={mergeSort}
                quick={quickSort}
            />
        </div>
     )
}

export default App
