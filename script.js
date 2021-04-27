const COMMANDS = {
    id:
      'uid=0(root) gid=0(root) groups=0(root)',
    help:
      'Commands: <span class="code">about</span>, <span class="code">edu</span>, <span class="code">skills</span>, <span class="code">proj</span>, <span class="code">contact</span>',
      proj:
      "<a href='https://www.instagram.com/load_thecode/' class='success link'>My Community of 8K+ Hackers and Programmers</a>, <br> \
      <a href='https://github.com/load-the-code/pyminer' class='success link'>Python Bitcoin Miner</a>, <br> \
      <a href='https://github.com/guitaruser/guitaruser' class='success link'>Python mini Projects</a>, <br> \
      <a href='https://github.com/load-the-code/trigonometry-graph-GUI' class='success link'>Trignometry Graph Plotter</a><br>",
    about:
      "Hey! 👋<br>I'm Tarun. I'm a Ethical Hacker, Programmer, Musician, and Marketing Enthusiast from India. I believe everyday that we get is a gift, and we should utilise it to maximum. Living by this i try to make myself productive and learn something new everyday.",
    skills:
      '<span class="code">Languages:</span> Python, Java, C, SQL, Javascript<br><span class="code">Technical:</span> Network Pentesting, Kali Linux, System Administration, Vulnerability Assessment, Bash Scripting<br><span class="code">Tools:</span> Metasploit Framework, Nmap, Burpsuite,Maltego, MSFVenom, Wireshark.',
    edu:
      "National Public School Rnr, 2008-2021<br> Self Learning since 2017",
    contact:
      "You can contact me on any of following links:<br><a href='https://www.instagram.com/load_thecode/' class='success link'>Instagram</a> , <a href='https://twitter.com/load_thecode' class='success link'>Twitter</a>"
    };
  let userInput, terminalOutput;
  
  let prevInputs = [];
  let lenUp = -1;
  
  const app = () => {
      userInput = document.getElementById("userInput");
      terminalOutput = document.getElementById("terminalOutput");
      document.getElementById("dummyKeyboard").focus();
      console.log("Application loaded");
  };
  
  const execute = function executeCommand(input) {
      let output;
      input = input.toLowerCase();
      if (input.length === 0) {
          return;
      }
      output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
      if (!COMMANDS.hasOwnProperty(input)) {
          output += `<div class="terminal-line">no such command: ${input}</div>`;
          console.log("Oops! no such command");
      } else {
          output += COMMANDS[input];
      }
  
      terminalOutput.innerHTML = `${
          terminalOutput.innerHTML
          }<div class="terminal-line">${output}</div>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      userInput.innerHTML = input;
      prevInputs.push(input);
      lenUp = prevInputs.length - 1;
      document.getElementById('dummyKeyboard').value = ''
  };
  
  const key = function keyEvent(e) {
  
      const input = document.getElementById('dummyKeyboard').value;
      if (e.key === "Enter") {
          execute(input);
          userInput.innerHTML = "";
      }
  
  
  };
  
  const backspace = function backSpaceKeyEvent(e) {
  
      if (e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
          return;
      }
  
      if (e.key === 'ArrowUp' && lenUp !== -1) {
          document.getElementById('dummyKeyboard').value = prevInputs[lenUp];
          lenUp--;
          if (lenUp < 0)
              lenUp = prevInputs.length - 1;
  
          return;
      } else if (e.key === 'ArrowDown' && lenUp !== -1) {
  
          lenUp++;
          if(lenUp===prevInputs.length)
              lenUp=0;
  
          document.getElementById('dummyKeyboard').value = prevInputs[lenUp];
  
          return;
  
      }
      userInput.innerHTML = userInput.innerHTML.slice(
          0,
          userInput.innerHTML.length - 1
      );
  };
  
  
  document.addEventListener("keydown", backspace);
  document.addEventListener("keypress", key);
  document.addEventListener("DOMContentLoaded", app);