#!/bin/bash
COUNT=0
while [ $COUNT -lt 10000 ]; do
    psql todos -c "insert into todos (id,text) values($COUNT,'abc');"
    let COUNT=COUNT+1
done

