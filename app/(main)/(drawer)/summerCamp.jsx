import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { ActivityIndicator, Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { s, vs } from 'react-native-size-matters';
import CheckBox from '../../../components/CheckBox';
import Footer from '../../../components/Footer';
import Card from '../../../components/card';
import { useAuth } from '../../../context/DataProvider';
import { TextData } from '../../../data';


const dropDownData = [
  { label: 'Grade 6', value: 'Grade 6' },
  { label: 'Grade 7', value: 'Grade 7' },
  { label: 'Grade 8', value: 'Grade 8' },
  { label: 'Grade 9', value: 'Grade 9' },
  { label: 'Grade 10', value: 'Grade 10' },
  { label: 'Grade 11', value: 'Grade 11' },
  { label: 'Grade 12', value: 'Grade 12' },
];

const InteretedData = [
  { label: 'Model Rocketry', value: 'Model Rocketry' },
  { label: 'CubeSat Building', value: 'CubeSat Building' },
  { label: 'Drone Building', value: 'Drone Building' },
  { label: 'Star Gazing', value: 'Star Gazing' },
  { label: 'Space Tinkering', value: 'Space Tinkering' },
]

export default function summerCamp() {
  const [name, setName] = useState('');
  const [Lastname, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [PhoneNo, setPhoneNo] = useState('')
  const [StudentName, setStudentName] = useState('')
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [instruments, setInstruments] = useState([])
  const [TermCondition, setTermCondition] = useState('')
  const [loader, setLoader] = useState(false)
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneNoError, setPhoneNoError] = useState('')
  const [studentNameError, setStudentNameError] = useState('')
  const [gradeError, setGradeError] = useState('')
  const [termConditionError, setTermConditionError] = useState('')
  const [IntrestedIn, setIntrestedIn] = useState([])
  const [enable, setEnable] = useState(false)

  const { summerCampHandle } = useAuth();



  const EnableButton = () => {
    setEnable(true)
  }

  const SendData = async () => {
    if (!validateFields()) return Alert.alert("Error", "Please fill all the fields correctly.");
    setLoader(true);
    let data = {
      firstname: name,
      lastname: Lastname,
      email: Email,
      phone: PhoneNo,
      studentName: StudentName,
      interestedin: IntrestedIn,
      grade: value,
      interestedIn: instruments,
      termCondition: TermCondition
    }
    let result = await summerCampHandle(data)
    if (result) {
      setLoader(false);

      Alert.alert("Information", 'Your summer camp registration has been submitted successfully.'
      );
      setName('');
      setLastName('');
      setEmail('');
      setPhoneNo('');
      setStudentName('');
      setIntrestedIn([]);
      setValue(null);
      setInstruments([]);
      setTermCondition('')

    }
    else {
      Alert.alert("Error", 'Something went wrong, please try again later.');
    }
    setLoader(false);
  }

  const checkNumber = () => {
    if (PhoneNo.length < 9) {
      setPhoneNoError(`Phone number must be 10 digits`);
      return false;

    }
    setPhoneNoError('');
    return true;


  }

  const IntrestedFiled = (value) => {
    if (IntrestedIn.includes(value)) {
      let newarr = IntrestedIn.filter(item => item !== value);
      setIntrestedIn(newarr);
    } else {
      setIntrestedIn([...IntrestedIn, value]);
    }
  }

  const validateFields = () => {
    if (name === '') {
      setFirstNameError('First name is required');
      return false;
    }
    if (Lastname === '') {
      setLastNameError('Last name is required');
      return false;
    }
    if (Email === '') {
      setEmailError('Email is required');
      return false;
    }
    if (!Email.includes('@') || !Email.includes('.')) {
      setEmailError('Enter a valid email');
      return false;
    }
    if (PhoneNo === '') {
      setPhoneNoError('Phone number is required');
      return false;
    }
    if (PhoneNo.length === 9) {
      setPhoneNoError(`Phone number must be 10 digits`);
      return false;
    }
    if (StudentName === '') {
      setStudentNameError('Student name is required');
      return false;
    }
    if (value === null) {
      setGradeError('Grade is required');
      return false;
    }
    if (TermCondition === '') {
      setTermConditionError('Term & Condition is required');
      return false;
    }
    return true;
  }
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "purple", paddingBottom: 100 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
            <Image
              source={{ uri: 'https://static.wixstatic.com/media/76c345_985554d3724b4dd9ae29abfd67d17384~mv2.png/v1/fill/w_241,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20(A2%20(Landscape))%20(17)_edited.png' }}
              style={{
                width: 150, height: 80
              }}
              resizeMode='contain'
            />
            <Image
              source={{ uri: 'https://static.wixstatic.com/media/76c345_e0d899679aa949259ca9aac145481912~mv2.png/v1/crop/x_29,y_0,w_2545,h_524/fill/w_412,h_85,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Landscape%20Event%20Creatives%20(3)_edited.png' }}
              style={{
                width: 150, height: 80
              }}
              resizeMode='contain'
            />
          </View>
          <View style={{
            backgroundColor: "rgba(255, 251, 251, 0.57)",
            paddingHorizontal: 10,
            paddingVertical: 6,
            marginTop: 150,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            alignSelf: "center"
          }}>
            <Text style={{
              color: "#fff",
              fontSize: 10,
              fontWeight: "500"
            }}>Summer 2025 - 3 Day immersive Program</Text>

          </View>
          <Text style={{
            alignSelf: "center",
            textAlign: "center",
            fontSize: 30,
            fontWeight: "900",
            color: "#fff",
            marginTop: 20
          }}>{`Explore the\n`}<Text style={{ color: "#f7e500" }}>Wonders of Space!</Text></Text>
          <Text style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 10,
            marginTop: 20
          }}>
            Hands- on experience with rocketry, satellites (cubesats), drones and stargazing for students in grades 6-12. Launch your passion for space exploration in our immersive three day programme!
          </Text>
          <View style={{ alignSelf: "center", marginTop: 30, flexDirection: "row", gap: 10 }}>
            <View style={{
              backgroundColor: "#fff",
              paddingHorizontal: 30,
              paddingVertical: 7,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#0d4193"


            }}>
              <Text style={{
                color: "#116dff",
                fontSize: 14,
                fontWeight: "700"
              }}>Registor Now</Text>
            </View>
            <View style={{
              backgroundColor: "#0d4193",
              paddingHorizontal: 30,
              paddingVertical: 7,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#fff"


            }}>
              <Text style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: "700"
              }}>Explor Program</Text>
            </View>
          </View>

          <Text style={{
            alignSelf: "center",
            fontSize: 16,
            fontWeight: "700",
            color: "#f7e500",
            marginTop: 100
          }}>Institutional Partner</Text>
          <Image
            source={{ uri: 'https://static.wixstatic.com/media/76c345_44960472aacd46fda4e8c01aaf7c4df8~mv2.png/v1/crop/x_34,y_0,w_2810,h_986/fill/w_228,h_80,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20(A2%20(Landscape))%20(19)_edited.png' }}
            style={{
              width: 200,
              height: 80,
              // backgroundColor:"red",
              alignSelf: "center",

            }}
            resizeMode='contain'
          />

        </View>
        <View style={{ paddingHorizontal: 0 }}>
          <Text style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: '700',
            marginTop: 20
          }}>A Three- Day <Text style={{ color: "#8747CC" }}>Immersive Experience</Text> </Text>
          <Text
            style={{
              color: "#000",
              alignSelf: "center",
              fontSize: 8,
              textAlign: "center",
              lineHeight: 15
            }}>Our carefully designed program takes students on a journey through different aspects of space exploration with hands-on activities led by experts.</Text>

          <View style={{ flexDirection: "row", justifyContent: 'space-evenly', marginTop: 20 }}>
            <Card title={'Rocketry'} pargraph={TextData.Rocket_text} onPress={() => Alert.alert("Rocketry")} />
            <Card title={'CubeSats'} pargraph={TextData.CubeSats_Text} onPress={() => Alert.alert("CubeSats")} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-evenly', marginTop: 10 }}>
            <Card title={'Stargazing'} pargraph={TextData.Stargazing_Text} onPress={() => Alert.alert("Stargazing")} />
            <Card title={'SpaceSciences'} pargraph={TextData.space_Text} onPress={() => Alert.alert("SpaceSciences")} />
          </View>
          <View style={{
            backgroundColor: "#fff",
            width: "90%",
            // height: 00,
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 12,
            paddingHorizontal: 20,
            paddingBottom: 40,
            elevation: 12,
            marginBottom: 20
          }}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: "600",
                color: "#000",
                alignSelf: "center",
                marginTop: 30,
              }}
            >Registration Form</Text>
            <Text style={styles.Label}>First name *</Text>
            <TextInput style={[styles.TextInput, firstNameError ? { borderColor: 'red' } : {}]}
            editable={!loader}
              placeholder='Parent First name'
              value={name}
              onChangeText={(txt) => { setName(txt), setFirstNameError('') }}
              placeholderTextColor={'gray'} />
            <Text style={styles.errorlabel}>{firstNameError}</Text>
            <Text style={styles.Label}>Last name *</Text>
            <TextInput style={[styles.TextInput, lastNameError ? { borderColor: 'red' } : {}]}
            editable={!loader}
              placeholder='Parent Last name'
              value={Lastname}
              onChangeText={(txt) => { setLastName(txt), setLastNameError('') }}
              placeholderTextColor={'gray'} />
            <Text style={styles.errorlabel}>{lastNameError}</Text>
            <Text style={[styles.Label]}>Parent's Email *</Text>
            <TextInput style={[styles.TextInput, emailError ? { borderColor: 'red' } : {}]}
            editable={!loader}
              placeholder='Parent@email.com'
              value={Email}
              onChangeText={(txt) => { setEmail(txt), setEmailError('') }}
              placeholderTextColor={'gray'} />
            <Text style={styles.errorlabel}>{emailError}</Text>


            <Text style={styles.Label}>Phone *</Text>
            <TextInput style={[styles.TextInput, phoneNoError ? { borderColor: 'red' } : {}]}
            editable={!loader}
              value={PhoneNo}
              keyboardType='numeric'
              maxLength={10}
              // minLength={10}
              onChangeText={(txt) => { setPhoneNo(txt), checkNumber() }}
              placeholderTextColor={'gray'} />
            <Text style={styles.errorlabel}>{phoneNoError}</Text>


            <Text style={styles.Label}>Student Full Name *</Text>
            <TextInput style={[styles.TextInput, studentNameError ? { borderColor: 'red' } : {}]}
            editable={!loader}
              value={StudentName}
              onChangeText={(txt) => { setStudentName(txt), setStudentNameError('') }}
              placeholderTextColor={'gray'} />
            <Text style={styles.errorlabel}>{studentNameError}</Text>

            <Text style={styles.Label}>Interested in(Optional)</Text>
            <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
              <Text
                onPress={() => {
                  IntrestedFiled('CubeSats')
                }}
                style={[styles.InterestedOption, IntrestedIn.includes('CubeSats') && {
                  backgroundColor: 'rgba(216, 48, 238, 0.07)',
                  borderColor: 'rgba(169, 25, 182, 1)',
                }]}>CubeSats</Text>


              <Text onPress={() => {
                IntrestedFiled('Drone Building')
              }}
                style={[styles.InterestedOption, IntrestedIn.includes('Drone Building') && {
                  backgroundColor: 'rgba(216, 48, 238, 0.07)',
                  borderColor: 'rgba(169, 25, 182, 1)',
                }]}>Drone Building</Text>
            </View>


            <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
              <Text onPress={() => {
                IntrestedFiled('Stargazing')

              }}
                style={[styles.InterestedOption, IntrestedIn.includes('Stargazing') && {
                  backgroundColor: 'rgba(216, 48, 238, 0.07)',
                  borderColor: 'rgba(169, 25, 182, 1)',
                }]}>Stargazing</Text>
            </View>

            <Text style={styles.Label}>Select Grade *</Text>
            {/* {renderLabel()} */}
            <Dropdown
              style={[styles.dropdown, gradeError ? { borderColor: "red" } : {}, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setGradeError('');
                setValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={isFocus ? 'blue' : 'black'}
                  name="Safety"
                  size={20}
                />
              )}
            />
            <Text style={styles.errorlabel}>{gradeError}</Text>

            <Text style={[styles.Label, { marginBottom: 20 }]}>Interested In</Text>
            <CheckBox options={InteretedData}
              checkedValues={instruments}
              onChange={setInstruments}
            />
            <Pressable style={{ flexDirection: "row", gap: 10, marginTop: 20 }}
              onPress={() => {
                if (TermCondition == '') {
                  setTermCondition('agree')
                  setTermConditionError('')
                  EnableButton()

                }
                else {
                  setTermCondition('')
                  setEnable(false)
                }
              }}
            >
              <MaterialIcons name={TermCondition ? 'check-box' : "check-box-outline-blank"} size={20} color={termConditionError ? "red" : TermCondition ? 'green' : "black"} />
              <Text style={[{ fontWeight: "700" }, termConditionError ? { color: "red" } : {}]}>I agree to the Term & Condition
                <Text style={[{ fontWeight: "400" }, termConditionError ? { color: "red" } : {}]}> and acknowledge that the SpaceSkool team may Contact me regarding the Space Simmer Camp. *</Text></Text>
            </Pressable>
            <TouchableOpacity
              disabled={!enable}
              onPress={() => SendData()}
              style={[{
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                height: vs(50),
                width: s(250),
                borderRadius: s(50),
                marginTop: vs(40)
              },
              enable ? {
                backgroundColor: "rgba(4, 71, 134, 1)",
              } : {
                backgroundColor: "gray",
              }]}>
              {
                loader ?
                  <ActivityIndicator color="#fff" size={'small'} />
                  :
                  <Text style={{
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "600"
                  }}>Submit</Text>
              }

            </TouchableOpacity>
          </View>
        </View>


        <Footer />
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  Label: {
    fontSize: 14,
    color: '#000',
    marginTop: 20

  },
  TextInput: {
    width: "100%",
    borderRadius: 7,
    marginTop: 8,
    borderWidth: 0.7,
    borderColor: "#000",
    paddingStart: 10,
    fontSize: 16
  },
  InterestedOption: {
    borderRadius: 7,
    borderColor: "#000",
    borderWidth: 0.7,
    paddingHorizontal: 10,
    paddingVertical: 5

  },
  dropdown: {
    marginTop: 10,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  errorlabel: {
    color: 'red',
    fontSize: s(10),
    marginStart: s(5)

  },
})