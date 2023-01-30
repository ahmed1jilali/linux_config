import os
import sys
import fileinput


i3_config_file = f"{os.environ['HOME']}/.config/i3/config"
gap_size_line_contant = ""
gap_size = sys.argv[1]

with open(i3_config_file) as f:
    lines = [line.strip('\n') for line in f]

for ln in lines:
    if ln[:11] == "gaps inner ":
        gap_size_line_contant = ln


try:
    type(int(gap_size))
    for i, line in enumerate(fileinput.input(i3_config_file, inplace=1)):
        sys.stdout.write(line.replace(gap_size_line_contant, f'gaps inner {gap_size}'))
    os.system("i3-msg reload")
    print("done")
except: 
    print("something went wrong: check your input or if the config file exists")
