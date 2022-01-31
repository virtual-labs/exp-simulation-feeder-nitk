<u>**Aim of the experiment: Fault scenario simulation in a feeder**</u>

Whenever fault happens in a feeder, the circuit breaker placed in the feeder trips due to high fault current. This will alter the loading conditions in the substation. Whenever fault occurs, Alarm will be generated indicating tripping of circuit breaker.

This process is simulated as below:

<u>**Fault on feeder1**</u>

1. Prefault condition is taken as  
   45A flowing in Feeder 1(with 3 switches on)  
   30A flowing in Feeder 2(with 2 switches on)

<u>Reading of meters</u>

<table>
<tr>
<th colspan=3>M1</th>
<th colspan=3>M2</th>
<th colspan=3>M3</th>
</tr>

<tr>
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
 
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>

<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
</tr>

<tr>
<td>11 </td>
<td>45</td>
<td>857.36</td>

<td>11 </td>
<td>30</td>
<td>571.57</td>

<td>33 </td>
<td>25</td>
<td>1423.94</td>
</tr>
</table>

2. Fault on feeder1 is simulated by short.
3. The circuit breaker CB6 opens, CB6 color changes to blue.
4. Alarm gets generated.

<u>Reading of meters changes</u>:

<table>
<tr>
<th colspan=3>M1</th>
<th colspan=3>M2</th>
<th colspan=3>M3</th>
</tr>

<tr>
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
 
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>

<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
</tr>

<tr>
<td>11 </td>
<td>0</td>
<td>0</td>

<td>11 </td>
<td>30</td>
<td>571.57</td>

<td>33 </td>
<td>10</td>
<td>571.57</td>
</tr>
</table>

<u>**Fault on feeder2**</u>

1. Prefault condition is taken as  
   45A flowing in Feeder 1(with 3 switches on)  
   30A flowing in Feeder 2(with 2 switches on)

<table>
<tr>
<th colspan=3>M1</th>
<th colspan=3>M2</th>
<th colspan=3>M3</th>
</tr>

<tr>
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
 
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>

<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
</tr>

<tr>
<td>11 </td>
<td>45</td>
<td>857.36</td>

<td>11 </td>
<td>30</td>
<td>571.57</td>

<td>33 </td>
<td>25</td>
<td>1423.94</td>
</tr>
</table>

2. Fault on feeder2 is simulated by short.
3. The circuit breaker CB7 opens, CB7 color changes to blue.
4. Alarm gets generated.

<u>Reading of meters changes</u>:

<table>
<tr>
<th colspan=3>M1</th>
<th colspan=3>M2</th>
<th colspan=3>M3</th>
</tr>

<tr>
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
 
<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>

<td>V (kV) </td>
<td>I (A) </td>
<td>P (kW)</td>
</tr>

<tr>
<td>11 </td>
<td>45</td>
<td>857.36</td>

<td>11 </td>
<td>0</td>
<td>0</td>

<td>33 </td>
<td>15</td>
<td>857.36</td>
</tr>
</table>
