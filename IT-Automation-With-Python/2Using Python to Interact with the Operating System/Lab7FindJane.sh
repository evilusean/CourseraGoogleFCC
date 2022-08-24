#!/bin/bash
>oldFiles.txt

files=$(grep " jane " /home/student-00-b5c7881ca4c3/data/list.txt | cut -d ' ' -f 3)

for i in $files;do

        if test -e ~/$i;then

                echo $i>>oldFiles.txt;

        else
                echo "not working"; fi

done
#####Not Working
#New Script
#!/bin/bash
>oldFiles.txt

files=$(grep " jane " /home/student-00-b5c7881ca4c3/data/list.txt | cut -d ' ' -f 3)

for file in $files; do
if test -e ~/$file; then echo $file >> oldFiles.txt; else echo "File does not exist";$
done
###Not Working
#New Script(WORKS) ./findJane > oldFiles.txt
#!/bin/bash
>oldFiles.txt

files=$(grep " jane " /home/student-00-b5c7881ca4c3/data/list.txt | cut -d ' ' -f 3)

for file in $files; do

        if test -e ~/data/$file; then
                echo $file >> oldFiles.txt;
        else
                echo "File doesn't exist"; fi
done
###ATTEMPT 4(WORKS)
#./findJane.sh > oldFiles.txt
#!/bin/bash
>oldFiles.txt

files= grep " jane " /home/student-00-b5c7881ca4c3/data/list.txt | cut -d ' ' -$
for file in $files; do
        if test -e ~/data/$file; then
                echo $file >> oldFiles.txt;
        else
                echo "File does not exist"; fi
done


