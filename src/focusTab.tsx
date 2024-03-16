import { Component, useState } from 'react';
import Pomodoro from "./pomodoro";
export default function focusMode() {
        const [sessionTime, setSessionTime] = useState(0);
        const [restTime, setRestTime] = useState(0);
        const [repeatCount, setRepeatCount] = useState(1);
      
        const handleChange = event => {
          const {name, value} = event.target;
          if (name === 'sessionTime') {
            setSessionTime(Number(value));
          } else if (name === 'restTime') {
            setRestTime(Number(value));
          }
          else if (name === 'repeat') {
            setRepeatCount(Number(value));
          }
        };
    return <main className="focusMode">
                <section>
                    <h1 className="header">This is the podomoro timer focus mode</h1>
                    <p className="description">The pomodoro timer is a productivity technique that helps you focus on a task for a fixed amount of time, usually 25 minutes, followed by a short break, usually 5 minutes. The idea is to break down your work into manageable chunks and avoid distractions. The pomodoro timer can be a simple kitchen timer, a smartphone app, or a web-based tool. The benefits of using the pomodoro timer include increased concentration, reduced stress, and improved time management.
                    </p><br />
                    <p className="description">Start using pomodoro with persistant by clicking the button below. Set rest time to 0 for no rest(not recomended)</p>
                </section>
                <section className="pomodoro">
                    <form action="|">
                        <article className="pomodoroContainer">
                            <h1 className="pomodoroHeader">Select the amount of time in focus session and start</h1>
                            <div className="timeSelection"><h1 className='description'>Time(in minutes)</h1><input type="number" name="sessionTime" id="sessionTime" placeholder="25"value={sessionTime} min={0} onChange={handleChange}/></div>
                            <div className="restSelection"><h1 className='description'>Rest(in minutes)</h1><input type="number" name="restTime" id="restTime" placeholder="5" value={restTime} min={0} onChange={handleChange} /></div>
                        </article>
                        <h1 className='header repeatHeader'>Times of repeat</h1>
                        <input type="number" name='repeat' id='repeat' className='repeat' placeholder="Times of repeat" value={repeatCount} max="100" min={1} onChange={handleChange}/>
                        <Pomodoro sessionTime={sessionTime} restTime={restTime} repeatCount={repeatCount}/>
                    </form>
                </section>
        </main>
}