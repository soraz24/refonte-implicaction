pipeline {
		agent any
		tools {
				maven "MAVEN"
				jdk "JDK"
		}
		stages {
				stage('docker-compose'){
						steps{
							        sh 'curl -L https://github.com/docker/compose/releases/download/1.25.3/run.sh -o /usr/local/bin/docker-compose'
								sh 'pwd '
								sh 'ls '
								sh 'cat docker-compose.yml'
								sh 'docker-compose up'
						}
				}
				stage('Build') {
						steps {
								sh 'mvn spring-boot:run -Dspring-boot.run.profiles=local'
						}
				}
		}
		post {
			always {
					junit(
				allowEmptyResults: true,
				testResults: '*/test-reports/.xml'
			)
			}
		} 
}
