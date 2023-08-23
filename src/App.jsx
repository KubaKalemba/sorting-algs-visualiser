import { useState } from 'react'
import './App.css'
import Chart from "./components/Chart/Chart.jsx";

function App() {

    const [values, setValues] = useState([15, 38, 7, 46, 5, 21, 41, 23, 25, 37, 42, 49, 35, 16, 31, 20, 26, 10,
        2, 44, 19, 12, 18, 36, 13, 51, 28, 29, 40, 33, 48, 32, 30, 45, 39, 9, 1, 8, 47, 6, 43, 3, 22, 27, 24, 4, 34, 11,
        50, 14, 17]
)

    const [speed, setSpeed] = useState(100)
    const [maxSpeed, setMaxSpeed] = useState(300)

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
            await wait(maxSpeed - speed)
        }
        setValues([...vals])
    }

    const bubbleSort = async () => {
        let vals = [...values]
        for (let i = 0; i < vals.length; i++) {
            for (let j = i+1; j < vals.length; j++) {
                if(vals[i]>vals[j]) {
                    let tmp = vals[i]
                    vals[i] = vals[j]
                    vals[j] = tmp
                    await wait(maxSpeed - speed)
                }
                setValues([...vals])
            }
        }
        setValues([...vals])
    }

    const merge = (arr, l, m, r) => {
        let n1 = m - l + 1
        let n2 = r - m

        let L = new Array(n1)
        let R = new Array(n2)

        for (let i = 0; i < n1; i++)
            L[i] = arr[l + i]
        for (let j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j]


        let i = 0
        let j = 0

        let k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    const mergeSort = async (vals, l, r) => {
        if(l>=r) {
            return
        }

        let m = Math.floor((l+r)/2)
        await mergeSort(vals, l, m)
        await mergeSort(vals, m + 1, r)
        merge(vals, l, m, r)
        setValues([...vals])
        await wait(maxSpeed - speed)
    }

    const partition = async (vals, low, high) => {
        let pivot = vals[high];
        let i = low - 1;

        for (let j = low; j <= high - 1; j++) {
            if (vals[j] < pivot) {
                i++;
                [vals[i], vals[j]] = [vals[j], vals[i]];
            }
        }

        [vals[i + 1], vals[high]] = [vals[high], vals[i + 1]];
        setValues([...vals])
        await wait(maxSpeed - speed)
        return i + 1;
    }

    const quickSort = async (vals, low, high) => {
        if (low < high) {
            let pi = await partition(vals, low, high);
            await quickSort(vals, low, pi - 1);
            await quickSort(vals, pi + 1, high);
        }
    }

    const shuffle = () => {
        let newValues = [...values]
        for (let i = newValues.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = newValues[i];
            newValues[i] = newValues[j];
            newValues[j] = tmp;
        }
        setValues(newValues)
    }


    const wait = (time) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(true), time)
        });
    }

    return (
        <div className="App">
            <Chart
                values={values}
                selection={selectionSort}
                bubble={bubbleSort}
                merge={mergeSort}
                quick={quickSort}
                shuffle={shuffle}
                setSpeed={setSpeed}
                speed={speed}
                maxSpeed={""+ maxSpeed}
            />
        </div>
     )
}

export default App
