#!/bin/bash
cat title_product.txt | while read line
    do
       echo -e 'Feature: Test check product page\n
        As a [role]
        I want [feature]
        So that [benefit]

        @dev
        Scenario:  check product detail
            Given I am visite
            When I am  go page detail '""'"'$line'"
            Then I should page detail
            When I can check image url
            Then I can see image found or not\n' &>>features/product.feature

    done
    chimp --ddp=http://localhost:3000 --watch | egrep -w "404 Not Found | image not found" -A 5 -B 5 > error_image.log

