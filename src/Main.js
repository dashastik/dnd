import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import Card from './Card';
import Description from './Form/Description';
import Strength from './Form/Strength';
import Dexterity from './Form/Dexterity';
import Construction from './Form/Construction';
import Intelligence from './Form/Intelligence';
import Wisdom from './Form/Wisdom';
import Charisma from './Form/Charisma';
import Inventory from './Form/Inventory';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/form' component={Form} />
            <Route path='/card' component={Card} />
            <Route path='/description' component={Description} />
            <Route path='/strength' component={Strength} />
            <Route path='/dexterity' component={Dexterity} />
            <Route path='/construction' component={Construction} />
            <Route path='/intelligence' component={Intelligence} />
            <Route path='/wisdom' component={Wisdom} />
            <Route path='/charisma' component={Charisma} />
            <Route path='/inventory' component={Inventory} />
        </Switch>
    </main>
)

export default Main;