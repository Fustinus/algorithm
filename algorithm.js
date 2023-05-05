ALGORITHM SENTENCE

VAR

   num-v,num_w,num_c:= INTEGER ;

   sentc:= STRING[] ;

BEGIN

   num_c:= 0 ;

  num_w:= 1 ;

  num_v:= 0;
  
  write("type the sentence")

  read(sentc)

REPEAT

   

   IF (sentc[num_c]=" ") THEN

       num_w:=num_w+1 ;

   END_IF

  IF (sentc[num_c] in ["a","e","i","","o","u"]) THEN

   num_v:= num_v +1 ;

   END_IF

   num_c := num_c+1 ;

UNTIL (sentc[num_c]=".")

write( "The number of characters are ", num_c )

write (" The number of words are ", num_w)

write (" The number of vowels are ", num_v)

END
