import glob
import shutil
import os
from random import shuffle

"""
How to use:
download the 6 datasets from 
unpack datasets into "datasets" folder in main directory.
place the script in the the main directory.
Run the script.
Generated sample sets are to be found in the output folder.
"""

main_path = "/Users/mjadmin/PycharmProjects/dataset_generation"
ds_path = f"{main_path}/datasets"

cremad_angry = glob.glob(f"{ds_path}/cremad/AudioWAV/*_ANG_*")
cremad_disgust = glob.glob(f"{ds_path}/cremad/AudioWAV/*_DIS_*")
cremad_fear = glob.glob(f"{ds_path}/cremad/AudioWAV/*_FEA_*")
cremad_happy = glob.glob(f"{ds_path}/cremad/AudioWAV/*_HAP_*")
cremad_neutral = glob.glob(f"{ds_path}/cremad/AudioWAV/*_NEU_*")
cremad_sad = glob.glob(f"{ds_path}/cremad/AudioWAV/*_SAD_*")

ravdess_angry_sp = glob.glob(f"{ds_path}/Ravdess/audio_speech_actors_01-24/Actor*/*-*-05-*")
ravdess_disgust_sp = glob.glob(f"{ds_path}/Ravdess/audio_speech_actors_01-24/Actor*/*-*-07-*")
ravdess_fear_sp = glob.glob(f"{ds_path}/Ravdess/audio_speech_actors_01-24/Actor*/*-*-06-*")
ravdess_happy_sp = glob.glob(f"{ds_path}/Ravdess/audio_speech_actors_01-24/Actor*/*-*-03-*")
ravdess_neutral_sp = glob.glob(f"{ds_path}/Ravdess/audio_speech_actors_01-24/Actor*/*-*-01-*")
ravdess_sad_sp = glob.glob(f"{ds_path}/Ravdess/audio_speech_actors_01-24/Actor*/*-*-04-*")

ravdess_angry_so = glob.glob(f"{ds_path}/Ravdess/Audio_Song_Actors_01-24/Actor*/*-*-05-*")
ravdess_disgust_so = glob.glob(f"{ds_path}/Ravdess/Audio_Song_Actors_01-24/Actor*/*-*-07-*")
ravdess_fear_so = glob.glob(f"{ds_path}/Ravdess/Audio_Song_Actors_01-24/Actor*/*-*-06-*")
ravdess_happy_so = glob.glob(f"{ds_path}/Ravdess/Audio_Song_Actors_01-24/Actor*/*-*-03-*")
ravdess_neutral_so = glob.glob(f"{ds_path}/Ravdess/Audio_Song_Actors_01-24/Actor*/*-*-01-*")
ravdess_sad_so = glob.glob(f"{ds_path}/Ravdess/Audio_Song_Actors_01-24/Actor*/*-*-04-*")

tess_angry = glob.glob(f"{ds_path}/TESS/*/*/*angry/*")
tess_disgust = glob.glob(f"{ds_path}/TESS/*/*/*disgust/*")
tess_fear = glob.glob(f"{ds_path}/TESS/*/*/*Fear/*")
tess_happy = glob.glob(f"{ds_path}/TESS/*/*/*happy/*")
tess_neutral = glob.glob(f"{ds_path}/TESS/*/*/*neutral/*")
tess_sad = glob.glob(f"{ds_path}/TESS/*/*/*sad/*")

emotify_angry = glob.glob(f"{ds_path}/emotify/anger/*")
# emotify_disgust = glob.glob(f"{ds_path}/emotify/disgust/*") not existing
emotify_fear = glob.glob(f"{ds_path}/emotify/fear/*")
emotify_happy = glob.glob(f"{ds_path}/emotify/happiness/*")
emotify_neutral = glob.glob(f"{ds_path}/emotify/neutral/*")
emotify_sad = glob.glob(f"{ds_path}/emotify/sadness/*")

mirex_v2_angry = glob.glob(f"{ds_path}/mirex_v2/angry/*")
# mirex_v2_disgust = glob.glob(f"{ds_path}/mirex_v2/disgust/*") not existing
mirex_v2_fear = glob.glob(f"{ds_path}/mirex_v2/fear/*")
mirex_v2_happy = glob.glob(f"{ds_path}/mirex_v2/happy/*")
mirex_v2_neutral = glob.glob(f"{ds_path}/mirex_v2/neutral/*")
mirex_v2_sad = glob.glob(f"{ds_path}/mirex_v2/sad/*")

song_angry = ravdess_angry_so + emotify_angry + mirex_v2_angry
song_disgust = ravdess_disgust_so
song_fear = ravdess_fear_so + emotify_fear + mirex_v2_fear
song_happy = ravdess_happy_so + emotify_happy + mirex_v2_happy
song_neutral = ravdess_neutral_so + emotify_neutral + mirex_v2_neutral
song_sad = ravdess_sad_so + emotify_sad + mirex_v2_sad

speech_angry = cremad_angry + ravdess_angry_sp + tess_angry
speech_disgust = cremad_disgust + ravdess_disgust_sp + tess_disgust
speech_fear = cremad_fear + ravdess_fear_sp + tess_fear
speech_happy = cremad_happy + ravdess_happy_sp + tess_happy
speech_neutral = cremad_neutral + ravdess_neutral_sp + tess_neutral
speech_sad = cremad_sad + ravdess_sad_sp + tess_sad

shuffle(song_angry)
shuffle(song_disgust)
shuffle(song_fear)
shuffle(song_happy)
shuffle(song_neutral)
shuffle(song_sad)

shuffle(speech_angry)
shuffle(speech_disgust)
shuffle(speech_fear)
shuffle(speech_happy)
shuffle(speech_neutral)
shuffle(speech_sad)

# lacking disgust songs!!!!! removed from len list below

speech_counts = [len(speech_angry), len(speech_disgust), len(speech_fear), len(speech_happy), len(speech_neutral), len(speech_sad)]
song_counts = [len(song_angry), len(song_fear), len(song_happy), len(song_neutral), len(song_sad)]
output_dir = f"{main_path}/output"
if os.path.exists(output_dir):
    shutil.rmtree(output_dir)
os.makedirs(output_dir)
for i in range(min(min(song_counts), min(speech_counts))):
    os.makedirs(f"{output_dir}/{i + 1}")
    os.makedirs(f"{output_dir}/{i + 1}/music")
    os.makedirs(f"{output_dir}/{i + 1}/speech")
    shutil.copy(speech_happy[i], f"{output_dir}/{i + 1}/speech/001.wav")
    shutil.copy(speech_angry[i], f"{output_dir}/{i + 1}/speech/002.wav")
    shutil.copy(speech_neutral[i], f"{output_dir}/{i + 1}/speech/003.wav")
    shutil.copy(speech_sad[i], f"{output_dir}/{i + 1}/speech/004.wav")
    shutil.copy(speech_fear[i], f"{output_dir}/{i + 1}/speech/005.wav")
    shutil.copy(speech_disgust[i], f"{output_dir}/{i + 1}/speech/006.wav")
    
    shutil.copy(song_happy[i], f"{output_dir}/{i + 1}/music/001.wav")
    shutil.copy(song_angry[i], f"{output_dir}/{i + 1}/music/002.wav")
    shutil.copy(song_neutral[i], f"{output_dir}/{i + 1}/music/003.wav")
    shutil.copy(song_sad[i], f"{output_dir}/{i + 1}/music/004.wav")
    shutil.copy(song_fear[i], f"{output_dir}/{i + 1}/music/005.wav")
    # shutil.copy(song_disgust[i], f"{output_dir}/{i + 1}/music/006.wav")
    

"""
attempt on categorizing mirex emotions:

angry - aggresive, volatile
happy - amiable, cheerful, fun(?), witty
sad - brooding
neutral - 
disgust - wry(?)
fear - anxious
other - autumnal, bittersweet, boisterous, campy, donfident, fiery, humorous(?)

"""
