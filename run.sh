#!/bin/bash
while read line; do
       echo 'Feature: Test check product page
        As a [role]
        I want [feature]
        So that [benefit]

        @dev
        Scenario:  check product detail
            Given I am visite
            When I am  go page detail '""'"'$line'"
            Then I should page detail' &>>product.feature
done < title_product.txt
mv product.feature /home/visal/Desktop/test_safir_404/features/
chimp --ddp=http://localhost:3000 --watch