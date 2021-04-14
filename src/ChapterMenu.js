import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export default function ChapterMenu() {

    return (
        <Card>
            <CardContent>
                <Button variant="outlined" color="primary">Chapter 1</Button>
                <Button variant="outlined" color="primary">Chapter 2</Button>
                <Button variant="outlined" color="primary">Chapter 3</Button>
            </CardContent>
        </Card>
    );
}