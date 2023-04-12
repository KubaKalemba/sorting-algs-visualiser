import { useState } from 'react'
import './App.css'
import Chart from "./components/Chart/Chart.jsx";

function App() {

    const [values, setValues] = useState([1, 7, 19, 5, 13, 8, 17, 3, 12, 11, 16, 10, 6, 20, 2, 15, 9, 18, 4, 14])

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
            await wait(200)
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
