import React, { useState, useMemo } from 'react';
import './App.css';
import Title from './Components/Title';

const App = () => {
    const [count, setCount] = useState<number>(1);
    const [userName, setUserName] = useState<string>('');
    //useMemoを用いておらずパフォーマンスの最適化が出来ていない状態
    // const exponentiation = heavyExponentiationFunction(count);

    //useMemoを用いることでパフォーマンスの最適化が出来ている状態
    const exponentiation = useMemo(() => {
        return heavyExponentiationFunction(count);
    }, [count]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userName === '') {
            alert('Please enter your User Name ');
        } else {
            alert(`User Name:${userName}`);
            setUserName('');
        }
    };

    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: 32,
            }}
        >
            <Title titleText={'useMemo'} />
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 400,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        fontSize: 24,
                        justifyContent: 'center',
                        marginBottom: 24,
                    }}
                >
                    <button
                        style={{
                            fontSize: 24,
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        {count}
                    </button>
                    のべき乗は "{exponentiation}"
                </div>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <label
                        style={{
                            fontSize: 16,
                        }}
                    >
                        User Name
                    </label>
                    <input
                        style={{
                            fontSize: 16,
                            marginBottom: 8,
                            padding: 8,
                        }}
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                    <button
                        style={{
                            fontSize: 16,
                            padding: 4,
                        }}
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

const heavyExponentiationFunction = (count: number) => {
    let i = 0;
    while (i < 10000) {
        console.log(i);
        i++;
    }

    return count ** 2;
};

export default App;
