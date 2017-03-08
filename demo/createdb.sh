#!/bin/bash
COUNT=0
T=0
while [ $COUNT -lt 10000 ]; do
	if [ "$COUNT" -ge 6 -a "$COUNT" -le 91 ]; then
		let x=128500+COUNT
    	psql todos -c "insert into todos (id,text,emoji) values($COUNT,'To do $COUNT', '&#$x');"
    	let COUNT=COUNT+1
    elif [ "$COUNT" -ge 140 -a "$COUNT" -le 209 ]; then
    	let x=128500+COUNT
    	psql todos -c "insert into todos (id,text,emoji) values($COUNT,'To do $COUNT', '&#$x');"
    	let COUNT=COUNT+1
    elif [ "$COUNT" -ge 215 -a "$COUNT" -le 220 ]; then
    	let x=128500+COUNT
    	psql todos -c "insert into todos (id,text,emoji) values($COUNT,'To do $COUNT', '&#$x');"
    	let COUNT=COUNT+1
    elif [ "$COUNT" -ge 268 -a "$COUNT" -le 383 ]; then
    	let x=128500+COUNT
    	psql todos -c "insert into todos (id,text,emoji) values($COUNT,'To do $COUNT', '&#$x');"
    	let COUNT=COUNT+1
    elif [ "$COUNT" -ge 796 -a "$COUNT" -le 804 ]; then
    	let x=128500+COUNT
    	psql todos -c "insert into todos (id,text,emoji) values($COUNT,'To do $COUNT', '&#$x');"
    	let COUNT=COUNT+1
    else
    	n=$((COUNT%91))
    	let x=127800+n
    	psql todos -c "insert into todos (id,text,emoji) values($COUNT,'To do $COUNT', '&#$x');"
    	let COUNT=COUNT+1
    fi
done